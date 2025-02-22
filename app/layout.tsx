import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { constructMetadata } from "@/lib/metadata";
import { LoadingProvider } from "@/lib/contexts/LoadingContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
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

export const metadata: Metadata = constructMetadata({
  title: "Mohammed Abdelaziz",
  description: "A Developer with many hobbies",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            {children} <SpeedInsights />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
