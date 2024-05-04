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
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7cEuAwQ_5DwxSwDz2P4TnNT4M5Bv2zwSf6UPZW8ScVDjaNYUTorYoxMf5UfDCD7Wlb4ASeuPJ9A8Uug1-4k2lPO9R-rC89c_Yv4HP6f1Ac2rPGGw5INjIsyMLRKhqM1JUX8jgr17UosqTIfjRNLaBo6V2YobNCjJsZ_QGr2qTqQtp2ALuZf36VfS5Jw/s320/character.webp",
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
