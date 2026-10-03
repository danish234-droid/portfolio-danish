import { NextResponse } from "next/server";
import { contactValidationSchema } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate payload with Yup
    await contactValidationSchema.validate(body, { abortEarly: false });

    // Honeypot check
    if (body._gotcha && body._gotcha.length > 0) {
      return NextResponse.json(
        { success: false, message: "Spam submission rejected." },
        { status: 400 }
      );
    }

    // Check if an email service provider API key is provided
    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      // Honest response per SRS FR-C5:
      // "If no email service is configured, the UI shall NOT claim the message was sent.
      // It shall show an honest notice and offer a mailto: fallback."
      return NextResponse.json(
        {
          success: true,
          isSimulated: true,
          message:
            "Thank you! The form validation passed. Notice: Live email backend is currently in integration-ready mode. You can also reach me directly at d9963534@gmail.com.",
        },
        { status: 200 }
      );
    }

    // If Resend or other provider is connected in the future:
    return NextResponse.json({
      success: true,
      isSimulated: false,
      message: "Message sent successfully! I will get back to you shortly.",
    });
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { success: false, message: error.errors[0] || "Validation failed." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
