import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--poppins",
  
  weight: "100"
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="dark:bg-dark-background dark:text-dark-text light:text-light-text light:bg-light-background antialiased min-h-screen "
      >
        {children}
      </body>
    </html>
  );
}
