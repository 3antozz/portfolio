import { Geist, Geist_Mono } from "next/font/google";
import "@/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollButton from "@/components/scrollBtn";
import FadeWrapper from "@/components/FadeInWhenVisible";
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: {
    template: 'Yacine Belahadji | %s',
    default: 'Yacine Belahadji | Web Developer',
  },
  description: 'Yacine Belahadji is a full-stack web developer building performant, modern web applications using React, Next.js, and Express.js.',
  openGraph: {
    title: 'Yacine Belahadji | Web Developer',
    description: 'Yacine Belahadji is a full-stack web developer building performant, modern web applications using React, Next.js, and Express.js.',
    url: new URL(process.env.WEBSITE_URL!),
    type: "profile",
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OpenGraph Image',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
  twitter: {
    title: 'Yacine Belahadji | Web Developer',
    description: 'Yacine Belahadji is a full-stack web developer building performant, modern web applications using React, Next.js, and Express.js.',
    site: '@3antozzinho',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OpenGraph Image',
      },
    ]
  },
  metadataBase: new URL(process.env.WEBSITE_URL!),
  applicationName: 'Yacine Belahadji Portfolio',
  creator: 'Yacine Belahadji',
  keywords: ['Yacine', 'Belahadji', 'Yacine Belahadji', 'Portfolio', 'Web Developer', 'React', 'Next.js', 'Node.js', 'Express', 'Postgresql'],
  robots: 'index, follow'
}

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const stored = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = stored || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.className = ('dark');
                  } else {
                    document.documentElement.className = ('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Analytics/>
        <FadeWrapper />
        <Header />
        {children}
        <ScrollButton />
        <Footer />
      </body>
    </html>
  );
}
