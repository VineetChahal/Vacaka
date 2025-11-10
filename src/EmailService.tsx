import emailjs, { type EmailJSResponseStatus } from "emailjs-com";

export const handleSubmit = async (
  email: string
): Promise<EmailJSResponseStatus | void> => {
  if (!email) return;

  try {
    const response: EmailJSResponseStatus = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { email },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    // alert("✅ Email sent successfully!");
    return response;
  } catch (err) {
    const error = err as { text?: string };
    console.log(error);
    // alert(`❌ Failed to send email: ${error.text ?? "Unknown error"}`);
  }
};
