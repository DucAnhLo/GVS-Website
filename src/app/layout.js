import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  title: "Global Soft Vietnam",
  description: "Software solutions for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
