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
} from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"

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
        .refine((val) => {
            if (!val) return true;
            return /^\d+$/.test(val);
        }, {
            message: "Phone number can only contain digits.",
        })
        .refine((val) => {
            if (!val) return true;
            return val.length >= 7 && val.length <= 14;
        }, {
            message: "Phone number must be between 7 and 14 digits",
        }),
    message: z.string(),
})

// Create type from schema
type FormValues = z.infer<typeof formSchema>

interface FrontEndFormProps {
    label?: boolean;
    css?: string;
}

const FrontEndForm: React.FC<FrontEndFormProps> = ({ label = false, css = "" }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    const handleSubmit = async (data: FormValues): Promise<void> => {
        console.log("Form data:", data)
        setLoading(true)
        try {
            const response = await fetch("/api/leads", {
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
                    toast.error(`Please correct the errors in the form.\n${errorText}`)
                } else if (response.status === 500) {
                    toast.error("Server error. Please try again later.", {
                        description: errorText
                    })
                } else {
                    toast.error(`An unexpected error occurred`, {
                        description: `${response.status} ${response.statusText}\n${errorText}`
                    })
                }
                return
            }

            const result: { success: boolean; message?: string } = await response.json()
            if (result.success) {
                setLoading(false)
                toast.success("Message sent successfully!")
                router.push("/thank-you")
            } else {
                setLoading(false)
                toast.error("Failed to send message", {
                    description: result.message || "Something went wrong. Please try again."
                })
            }
        } catch (error) {
            console.error("Error during fetch:", error)
            setLoading(false)
            toast.error("Failed to send message", {
                description: "Please check your network connection and try again."
            })
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className={`grid grid-cols-1 gap-5 ${css}`}
            >
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-5 items-center">
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
                                        className="w-full bg-transparent border-2 border-[#d3d3d3] rounded-md py-3 dark:placeholder:text-white h-14"
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
                                        className="w-full bg-transparent border-2 border-[#d3d3d3] rounded-md py-3 dark:placeholder:text-white h-14"
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
                                    className="w-full bg-transparent border-2 border-[#d3d3d3] rounded-md py-3 dark:placeholder:text-white h-14"
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
                                    className="w-full resize-none bg-transparent border-2 border-[#d3d3d3] rounded-md pt-4 pb-8 dark:placeholder:text-white h-32"
                                    placeholder="Message"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="relative z-10 lg:w-[230px] w-full md:h-[70px] h-[60px] flex justify-center items-center bg-[#0e1538] overflow-hidden rounded-[10px] cursor-pointer group"
                >
                    <span className="absolute z-10 inset-0 w-full h-[90%] m-auto bg-[#0e1538] rounded-[10px]" />
                    <span className="absolute -z-10 inset-0 w-full h-full transition-all ease-in-out duration-500 scale-0 group-hover:scale-100 group-hover:bg-gradient-to-b from-[#00ccff] to-[#d400d4] animate-rotate" />
                    <div className="text-white text-center lg:text-lg text-base leading-tight font-medium z-10">
                        {loading ? "Loading..." : "Submit"}
                    </div>
                </button>
            </form>
        </Form>
    )
}

export default FrontEndForm
