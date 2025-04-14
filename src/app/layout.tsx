import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Remove Geist
import { Inter } from "next/font/google"; // Add Inter
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define CSS variable
});

export const metadata: Metadata = {
  title: "Emmanuel Nyatepe | Software Engineer", // Corrected spelling
  description: "Portfolio of Emmanuel Nyatepe, a Software Engineer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}> {/* Apply variable to html tag */}
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`font-sans antialiased`} // Use the font-sans utility (linked to --font-inter in globals.css)
      >
        {children}
      </body>
    </html>
  );
}
