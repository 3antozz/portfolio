import { Geist, Geist_Mono } from "next/font/google";
import "@/globals.css";
import Header from "@/components/header/header"
import ThemeBtn from "@/components/theme-btn/theme-btn";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeBtn />
        <Header />
        {children}
      </body>
    </html>
  );
}
