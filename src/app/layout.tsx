import { Toaster } from "@/components/ui/Toaster";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "BAZARIO",
  description:
    "An E-commerce website",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
  authModal: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <Providers>
          <Navbar />
          <div className="container max-w-7xl mx-auto h-full pt-12 px-0 md:px-8">
            {children}
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
