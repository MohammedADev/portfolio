import type { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
}

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://mohammedabdelaziz.com";

export function constructMetadata({
  title,
  description,
  keywords,
  image,
  path,
}: MetadataProps = {}): Metadata {
  const baseTitle = "Mohammed Abdelaziz";
  const baseDescription = "A Developer with many hobbies and interests";

  return {
    title: title ? `${title} | ${baseTitle}` : baseTitle,
    description: description || baseDescription,
    keywords: keywords || [
      "developer",
      "photography",
      "portfolio",
      "projects",
      "Mohammed Abdelaziz",
      "Mohammed",
      "Abdelaziz",
    ],
    authors: [{ name: "Mohammed Abdelaziz" }],
    creator: "Mohammed Abdelaziz",
    openGraph: {
      title: title ? `${title} | ${baseTitle}` : baseTitle,
      description: description || baseDescription,
      url: path ? `${baseUrl}${path}` : baseUrl,
      siteName: baseTitle,
      images: [
        {
          url: image || `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title || baseTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${baseTitle}` : baseTitle,
      description: description || baseDescription,
      images: [image || `${baseUrl}/og-image.jpg`],
      creator: "@yourtwitterhandle",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    metadataBase: new URL(baseUrl),
  };
}
