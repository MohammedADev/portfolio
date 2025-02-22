import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { constructMetadata } from "@/lib/metadata";
import { LoadingProvider } from "@/lib/contexts/LoadingContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = constructMetadata({
  title: "Mohammed Abdelaziz",
  description: "A Developer with many hobbies and interests",
  keywords: ["projects", "portfolio", "development", "photography"],
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
