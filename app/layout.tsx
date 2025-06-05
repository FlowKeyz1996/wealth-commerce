import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/primary-components/Header";
import Footer from "@/components/primary-components/Footer";





export const metadata: Metadata = {
  title: "flowkeyz_developer",
  description: "flowkeyz developer website that showcases his work experience and projects over the years",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${`font-poppins`}antialiased`}
      >
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
