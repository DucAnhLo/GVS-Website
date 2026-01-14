import { Inter, Montserrat, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { LoadingProvider } from "@/contexts/LoadingContext";
import LoadingWrapper from "@/components/LoadingWrapper";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
// import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
});

export const metadata = {
  title: "GSV | Xây dựng giải pháp chuyển đổi số dành riêng cho doanh nghiệp",
  description:
    "Giải pháp phần mềm toàn diện được thiết kế riêng cho nhu cầu doanh nghiệp của bạn.",
  icons: {
    icon: "/gsvfavicon.png",
    apple: "/gsvfavicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
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
        className={`${inter.variable} ${montserrat.variable} ${sourceSerif4.variable} antialiased`}
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
