import { Resend } from "resend";
import { NextResponse } from "next/server";
import WelcomeEmail from "@/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { data } = await request.json();
  let log = await resend.sendEmail({
    from: process.env.EMAIL_SENDER,
    to: "carolina.stsampaio@gmail.com",
    subject: "hello world",
    react: WelcomeEmail({
      data,
    }),
  });

  console.log(log);

  return NextResponse.json({
    status: "Ok",
  });
}
