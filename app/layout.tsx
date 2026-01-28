import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Zaman Tədris Mərkəzi",
  description: "Gələcəyinizi Zamanında Planlayın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={`${outfit.variable} font-sans antialiased text-slate-900 bg-white`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
