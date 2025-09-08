"use server";

import { resend } from "@/lib/resend";
import { contactFormSchema, ContactFormSchemaType } from "./contact.schema";

export const sendContactEmail = async (values: ContactFormSchemaType) => {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((i) => i.message).join(", "));
  }

  const result = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "contact@vivianb.dev",
    replyTo: parsed.data.email,
    subject: parsed.data.subject || "New contact form submission",
    text: `From: ${parsed.data.name} (${parsed.data.email})\n\n${parsed.data.message}`,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }
  return result;
};
