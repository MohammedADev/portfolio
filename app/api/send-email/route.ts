import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: `smtp.${process.env.DOMAIN}`,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name} (${email})`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail({
      from: `"Mohammed Abdelaziz" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",
      text: `Hi ${name},\n\nThank you for reaching out! I'll get back to you as soon as possible.\n\nBest regards,\nMohammed Abdelaziz`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
} 