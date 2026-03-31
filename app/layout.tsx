import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WIN Store — Electronics, Fashion & More",
  description: "Shop electronics, appliances, fashion, and more at WIN Store.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
