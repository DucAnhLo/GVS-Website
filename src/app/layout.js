import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LoadingProvider } from "@/contexts/LoadingContext";
import LoadingWrapper from "@/components/LoadingWrapper";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

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
        <ThemeProvider>
          <LoadingProvider>
            <LoadingWrapper />
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <ThemeToggle />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
