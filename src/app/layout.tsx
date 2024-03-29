import type { Metadata } from "next";
import { Inter, Ropa_Sans } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
