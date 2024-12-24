"use client"
// React Hook Form
import { useForm } from "react-hook-form"
// React
import { useState } from "react"
import { useRouter } from "next/navigation"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Shadcnui
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
} from "../ui/Form"
import { Input } from "../ui/Input"
import { Textarea } from "../ui/Textarea"
import { Button } from "../ui/Button"

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name cannot be empty",
  }),
  email: z.string().email({
    message: "please use a valid email",
  }),
  phone: z
    .string()
    .optional()
    .refine((val) => val === "" || /^\d+$/.test(val), {
      message: "Phone number can only contain digits.",
    })
    .refine((val) => val === "" || (val.length >= 7 && val.length <= 14), {
      message: "phone must be between 7 and 14 digits",
    }),
  message: z.string(),
})

const FrontEndForm = ({ label = false, css }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  // ... imports

  const handleSubmit = async (data) => {
    console.log("Form data:", data)
    setLoading(true)
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error(
          `Server returned error: ${response.status} ${response.statusText}`,
          errorText
        )
        setLoading(false)
        if (response.status === 400) {
          alert(`Please correct the errors in the form. \n ${errorText}`)
        } else if (response.status === 500) {
          alert(
            `An error occurred on the server. Please try again later. \n ${errorText}`
          )
        } else {
          alert(
            `An unexpected error occurred: ${response.status} ${response.statusText} \n ${errorText}`
          )
        }
        return
      }

      const result = await response.json()
      if (result.success) {
        setLoading(false)
        router.push("/thank-you")
      } else {
        setLoading(false)
        alert(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error during fetch:", error)
      setLoading(false)
      alert(
        "Failed to send message. Please check your network connection and try again."
      )
    }
  }

  // ... rest of component

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={`grid grid-cols-1 gap-5 ${css}`}
      >
        <div className="grid grid-cols-2 gap-x-5 items-center">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                {label && (
                  <FormLabel>
                    Full Name <span className="text-primary">*</span>
                  </FormLabel>
                )}
                <FormControl>
                  <Input
                    className="w-full bg-transparent border-2 border-[#d3d3d3] rounded-md py-3 placeholder:text-white h-14"
                    placeholder="Full Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {label && (
                  <FormLabel>
                    Email <span className="text-primary">*</span>
                  </FormLabel>
                )}
                <FormControl>
                  <Input
                    className="w-full bg-transparent border-2 border-[#d3d3d3] rounded-md py-3 placeholder:text-white h-14"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              {label && (
                <FormLabel>
                  Phone <span className="text-primary">*</span>
                </FormLabel>
              )}
              <FormControl>
                <Input
                  className="w-full bg-transparent border-2 border-[#d3d3d3] rounded-md py-3 placeholder:text-white h-14"
                  placeholder="Phone"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              {label && <FormLabel>Message</FormLabel>}
              <FormControl>
                <Textarea
                  className="w-full resize-none bg-transparent border-2 border-[#d3d3d3] rounded-md pt-4 pb-8 placeholder:text-white h-32"
                  placeholder="Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={loading}
          className="bg-secondary border-2 transition-all ease-in-out duration-500 border-secondary text-lg text-white leading-tight font-medium h-[55px] w-[200px] rounded-md mt-3 hover:bg-transparent hover:rounded-[50px]"
        >
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  )
}

export default FrontEndForm
