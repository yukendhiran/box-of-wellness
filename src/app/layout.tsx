import type { Metadata } from "next";
import { Faculty_Glyphic } from "next/font/google";

import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const facultyGlyphic = Faculty_Glyphic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Box Of Wellness",
  description: "Healthy and affordable food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${facultyGlyphic.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
