import "./globals.css";
import { Work_Sans, Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/common/Navbar";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ['300', '400', '500', '600', '700'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TenTwenty UI Challenge",
  description: "Next.js UI challenge for TenTwenty",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${workSans.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
