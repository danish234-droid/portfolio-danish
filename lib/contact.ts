import * as Yup from "yup";

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  _gotcha?: string; // Honeypot field for spam prevention (FR-C7)
}

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  subject: Yup.string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject cannot exceed 100 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters")
    .required("Message is required"),
  _gotcha: Yup.string().max(0, "Bot detected"),
});

export interface SubmitResponse {
  success: boolean;
  message: string;
  isSimulated?: boolean;
}

export async function submitContactForm(
  values: ContactFormValues
): Promise<SubmitResponse> {
  // Honeypot check
  if (values._gotcha && values._gotcha.length > 0) {
    return { success: false, message: "Spam detected." };
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: "Network error. Please email directly at d9963534@gmail.com",
    };
  }
}
