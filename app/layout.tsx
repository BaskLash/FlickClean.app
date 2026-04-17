import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ScrollDepthTracker } from "@/components/analytics/ScrollDepthTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://flickclean.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FlickClean — Clean your gallery in minutes, not hours.",
    template: "%s · FlickClean",
  },
  description:
    "Stop scrolling forever. Swipe through your photos and free up space instantly. The fastest, calmest way to clean up your phone gallery.",
  applicationName: "FlickClean",
  keywords: [
    "clean phone gallery",
    "free up storage",
    "photo cleanup app",
    "swipe photo cleaner",
    "delete duplicate photos",
    "iOS photo cleaner",
    "Android photo cleaner",
  ],
  openGraph: {
    title: "FlickClean — Clean your gallery in minutes, not hours.",
    description:
      "Swipe through your photos and free up space instantly. The fastest, calmest way to clean up your phone gallery.",
    url: SITE_URL,
    siteName: "FlickClean",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlickClean — Clean your gallery in minutes, not hours.",
    description:
      "Swipe through your photos and free up space instantly.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07080b] text-[#f5f7fb]">
        {children}
        <ScrollDepthTracker />
        {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
        <Analytics />
      </body>
    </html>
  );
}
