import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/home/Navbar";
import { tiroBangla } from "@/components/ui/fonts";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "Creative Care Coaching",
  description:
    "An academic coaching center, for class 1 to class 12, help students in Scholarship, SSC, HSC and other examinations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" className={cn("h-full", "antialiased")}>
      <body className={tiroBangla.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
