import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const myFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fido - The Business Associate you need;",
  description:
    "FIDO is a leading provider of innovative solutions tailored to meet the unique needs of startups and small businesses",
  openGraph: {
    images: ["/public/fido-icon.png"],
    title: "Fido - The Business Associate you need",
    description:
      "FIDO is a leading provider of innovative solutions tailored to meet the unique needs of startups and small businesses",
  },
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
