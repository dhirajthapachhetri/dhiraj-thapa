import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Please add a subject").max(150, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

export type ContactValues = z.infer<typeof contactSchema>;

/** Builds a mailto link that opens the visitor's email app with the message filled in. */
export function buildMailto(to: string, values: ContactValues): string {
  const body = `${values.message}\n\n— ${values.name}\n${values.email}`;
  return `mailto:${to}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
}
