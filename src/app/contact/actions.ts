"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendContactEmail(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const topics = formData.getAll("topics").map((t) => t.toString());
  const visitor = formData.get("visitor")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "contact@mail.benpoole.me",
      to: "benpoole@outlook.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n${visitor ? `Visitor tag: ${visitor}\n` : ""}${topics.length ? `Topics:\n${topics.map((t) => `  - ${t}`).join("\n")}\n` : ""}\n${message}`,
    });

    return { status: "success", message: "Message sent! I'll be in touch soon." };
  } catch {
    return { status: "error", message: "Something went wrong. Please try emailing me directly." };
  }
}
