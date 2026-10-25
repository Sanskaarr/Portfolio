import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://sanskar-jain.vercel.app";
const TITLE = "Sanskar Jain — AI-Powered Full-Stack Developer";
const DESCRIPTION =
  "AI-Powered Full-Stack Developer shipping production systems fast using AI-assisted workflows — Next.js, Supabase, Java/Spring Boot, Node, LLM APIs, and IoT wearables. MCA, Amity University.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Sanskar Jain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${plexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--color-paper)] text-[var(--color-ink)]">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
