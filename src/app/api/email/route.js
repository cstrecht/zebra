import { Resend } from "resend";
import { NextResponse } from "next/server";
import WelcomeEmail from "@/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { firstName, email } = await request.json();
  await resend.sendEmail({
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: "Do you want to know more?",
    react: WelcomeEmail({
      firstName,
    }),
  });

  return NextResponse.json({
    status: "Ok",
  });
}
