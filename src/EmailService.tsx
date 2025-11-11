import emailjs, { type EmailJSResponseStatus } from "emailjs-com";

interface EmailConfig {
  email: string;
  type: "subscribe" | "query" | "free";
}

export const handleSubmit = async ({
  email,
  type,
}: EmailConfig): Promise<EmailJSResponseStatus | void> => {
  if (!email) {
    console.error("❌ Email is required");
    return;
  }

  // select env vars based on type
  const serviceId =
    type === "free"
      ? (import.meta.env.VITE_EMAILJS_SERVICE_ID_FREE as string)
      : (import.meta.env.VITE_EMAILJS_SERVICE_ID as string);

  const templateId =
    type === "query"
      ? (import.meta.env.VITE_EMAILJS_TEMPLATE_ID_QUERY as string)
      : type === "free"
      ? (import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FREE as string)
      : (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string);

  const publicKey =
    type === "free"
      ? (import.meta.env.VITE_EMAILJS_PUBLIC_KEY_FREE as string)
      : (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string);

  try {
    // initialize EmailJS with your user/public key (required)
    emailjs.init(publicKey);

    // send the email with only the `email` field
    const response = await emailjs.send(serviceId, templateId, { email });

    console.log("✅ Email sent successfully:", response.status, response.text);
    return response;
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
};
