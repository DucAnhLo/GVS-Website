import { Inter_Tight, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { LoadingProvider } from "@/contexts/LoadingContext";
import LoadingWrapper from "@/components/LoadingWrapper";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
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
    icon: "/gsvfavicon.png",
    apple: "/gsvfavicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@8..144,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${interTight.variable} ${montserrat.variable} antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <LoadingProvider>
              <LoadingWrapper />
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
              <CookieConsent />
              {/* <ThemeToggle /> */}
            </LoadingProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
