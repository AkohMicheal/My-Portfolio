import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@fontsource/fira-code";

export const metadata: Metadata = {
  title: "AkohTech | Portfolio",
  description:
    "Micheal Akoh — Software Engineer specializing in full-stack web development, AI/ML systems, and cloud infrastructure. React, Next.js, Node.js, Python, AWS. View projects and case studies.",
  keywords: [
    "AkohTech",
    "Portfolio",
    "Web Developer",
    "UI/UX",
    "Next.js",
    "Tailwind CSS",
    "Frontend Developer",
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Node.js",
    "Python",
    "AWS",
    "Machine Learning",
    "AI",
    "Deepfake Detection",
    "Cloud Infrastructure",
    "Micheal Akoh",
    "Lagos Developer",
  ],
  authors: [{ name: "AkohTech" }],
  creator: "AkohTech",
  openGraph: {
    title: "AkohTech | Portfolio",
    description:
      "Micheal Akoh — Software Engineer specializing in full-stack web development, AI/ML systems, and cloud infrastructure. React, Next.js, Node.js, Python, AWS. View projects and case studies.",
    url: "https://my-portfolio-livid-zeta-95.vercel.app/",
    siteName: "AkohTech",
    images: [
      {
        url: "https://my-portfolio-livid-zeta-95.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "AkohTech Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
