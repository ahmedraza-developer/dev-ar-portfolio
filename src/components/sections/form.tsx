"use client";

import { useId } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { linkButtonVariants } from "@/components/ui/link-button";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormValues } from "@/lib/lead-schema";
import { cn } from "@/lib/utils";

const inputClassName = "h-12 rounded-xl px-4";
const textareaClassName = "min-h-36 resize-y rounded-xl px-4 py-3";

type ApiResult = {
  success: boolean;
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
};

function formatApiError(result: ApiResult): string {
  if (result.errors) {
    return Object.values(result.errors).flat().join("\n");
  }

  return result.error ?? result.message ?? "Something went wrong.";
}

function RequiredMark() {
  return (
    <span aria-hidden className="text-brand-ink">
      *
    </span>
  );
}

export default function ContactForm({ className }: { className?: string }) {
  const id = useId();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: ApiResult = await response.json().catch(() => ({
        success: false,
        error: "Invalid server response.",
      }));

      if (!response.ok) {
        const description = formatApiError(result);

        if (response.status === 400) {
          toast.error("Please correct the errors in the form.", { description });
        } else if (response.status === 429) {
          toast.error("Too many attempts.", { description });
        } else if (response.status === 500) {
          toast.error("Server error. Please try again later.", { description });
        } else {
          toast.error("An unexpected error occurred.", { description });
        }
        return;
      }

      if (result.success) {
        toast.success(result.message ?? "Message sent successfully!");
        router.push("/thank-you");
      } else {
        toast.error("Failed to send message", {
          description: formatApiError(result),
        });
      }
    } catch {
      toast.error("Failed to send message", {
        description: "Please check your network connection and try again.",
      });
    }
  };

  const nameId = `${id}-name`;
  const emailId = `${id}-email`;
  const phoneId = `${id}-phone`;
  const messageId = `${id}-message`;

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      aria-busy={isSubmitting}
      className={className}
    >
      {/* Honeypot: hidden from people, filled in by bots. */}
      <input
        {...register("website")}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel htmlFor={nameId}>
                  Full name <RequiredMark />
                </FieldLabel>
                <Input
                  {...field}
                  id={nameId}
                  type="text"
                  autoComplete="name"
                  required
                  aria-invalid={fieldState.invalid}
                  disabled={isSubmitting}
                  className={inputClassName}
                  placeholder="Jane Doe"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel htmlFor={emailId}>
                  Email <RequiredMark />
                </FieldLabel>
                <Input
                  {...field}
                  id={emailId}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  aria-invalid={fieldState.invalid}
                  disabled={isSubmitting}
                  className={inputClassName}
                  placeholder="jane@company.com"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel htmlFor={phoneId}>
                Phone
                <span className="font-normal text-muted-foreground">
                  (optional)
                </span>
              </FieldLabel>
              <Input
                {...field}
                id={phoneId}
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                aria-invalid={fieldState.invalid}
                disabled={isSubmitting}
                className={inputClassName}
                placeholder="Digits only"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="message"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel htmlFor={messageId}>
                Message <RequiredMark />
              </FieldLabel>
              <Textarea
                {...field}
                id={messageId}
                rows={6}
                required
                aria-invalid={fieldState.invalid}
                disabled={isSubmitting}
                className={textareaClassName}
                placeholder="Tell me about your project, timeline and goals."
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            linkButtonVariants({ variant: "primary" }),
            "group w-full disabled:pointer-events-none disabled:opacity-60",
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
