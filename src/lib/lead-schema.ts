import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name cannot be empty." })
    .max(100, { message: "Name is too long." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please use a valid email address." })
    .max(254, { message: "Email is too long." }),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\d+$/.test(val), {
      message: "Phone number can only contain digits.",
    })
    .refine((val) => !val || (val.length >= 7 && val.length <= 14), {
      message: "Phone number must be between 7 and 14 digits.",
    }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message cannot be empty." })
    .max(5000, { message: "Message is too long." }),
});

export const leadRequestSchema = leadSchema.extend({
  website: z.string().optional(),
});

export const contactFormSchema = leadRequestSchema;

export type LeadFormValues = z.infer<typeof leadSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
