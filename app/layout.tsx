import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Overclock Player Tracker",
  description:
    "Search Overwatch player profiles and inspect competitive summary details with a compact Overclock-inspired UI.",
};

const bodyClassName = [
  interTight.variable,
  ibmPlexMono.variable,
  "min-h-full antialiased",
].join(" ");

const htmlClassName = [
  interTight.variable,
  ibmPlexMono.variable,
  "h-full",
].join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={htmlClassName}>
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}
