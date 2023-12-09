import type { Metadata } from "next";
import Head from "next/head";

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Generated by Mahmoud Abu Youssef",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
