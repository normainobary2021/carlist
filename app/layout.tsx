import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Car List App",
  description: "Best Seller Car List App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#ebf2f7] antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
