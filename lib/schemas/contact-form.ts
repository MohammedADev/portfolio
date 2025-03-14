import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least 5 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

export type FormData = z.infer<typeof formSchema>;