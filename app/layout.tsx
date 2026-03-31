import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WIN Store — Electronics, Fashion & More",
  description: "Shop electronics, appliances, fashion, and more at WIN Store.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
