import { Inter_Tight, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LoadingProvider } from "@/contexts/LoadingContext";
import LoadingWrapper from "@/components/LoadingWrapper";
import { ThemeProvider } from "@/contexts/ThemeContext";
// import ThemeToggle from "@/components/ThemeToggle";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Global Soft Vietnam",
  description: "Software solutions for your business",
  icons: {
    icon: '/gsvfavicon.png',
    apple: '/gsvfavicon.png', // Also good for mobile
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${interTight.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider>
          <LoadingProvider>
            <LoadingWrapper />
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            {/* <ThemeToggle /> */}
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
