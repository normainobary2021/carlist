import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import RegisterDialog from "@/components/auth/RegisterDialog";

import { NuqsAdapter } from 'nuqs/adapters/next/app';
import LoginDialog from "@/components/auth/LoginDialog";
import QueryProvider from "@/context/query-provider";

export const metadata: Metadata = {
  title: "Car List App",
  description: "Best Car Seller Listing App",
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
        <QueryProvider>
          <NuqsAdapter>
            <RegisterDialog />
            <LoginDialog />
            {children}
          </NuqsAdapter>
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
