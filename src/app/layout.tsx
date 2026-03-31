import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/shell/Footer";
import { Header } from "@/components/shell/Header";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-commerce web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-black">
        <Header />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
