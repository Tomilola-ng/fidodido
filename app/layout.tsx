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
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEhF4OQWGJua1ddk0WCVIjnstFWOHDUicMkDtVujmOgTpmrxrkqavkskXCRSNP3b1wBv-t0ZOxC-JSbtrC3kNcCQWYzQhNhP3zq0pBTEU5SsDPHIc0zMBEzNTbaB5AlYaeo_Sr01laTUKa3fYSKY_t6sxLU6D-jUMoqhfTZOY57hma4XSsaaKwTJfxQTEQ",
    ],
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
