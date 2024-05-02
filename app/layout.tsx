import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

const myFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fido",
  description: "The Business Associate you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
      <Header />
        {children}</body>
    </html>
  );
}
