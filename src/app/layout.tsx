import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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

// Define SEO Metadata
export const metadata: Metadata = {
  title: "Emmanuel Nyatepe | Software Engineer | Full-Stack Developer",
  description: "Portfolio of Emmanuel Nyatepe (Bhobu), a skilled Software Engineer & Full-Stack Developer from Accra, Ghana. Alumnus of Valley View University & Bishop Herman College. Specializing in React, Next.js, Node.js. Available for freelance & full-time roles.",
  keywords: [
    "Emmanuel Nyatepe", 
    "software engineer", 
    "developer", 
    "full-stack developer", 
    "Next.js", 
    "React", 
    "Node.js", 
    "Valley View University", 
    "VVU",
    "Bishop Herman College", 
    "BHOBU",
    "Bhobu", 
    "Bhobu tech guy", 
    "freelance", 
    "Accra", 
    "Ghana", 
    "web development",
    "portfolio"
  ],
  authors: [{ name: "Emmanuel Nyatepe" }],
  creator: "Emmanuel Nyatepe",
  // Open Graph (for social sharing)
  openGraph: {
    title: "Emmanuel Nyatepe | Software Engineer Portfolio",
    description: "Explore the portfolio of Emmanuel Nyatepe, showcasing projects and skills in web development.",
    url: "https://your-domain.com", // Replace with your actual deployed domain
    siteName: "Emmanuel Nyatepe Portfolio",
    images: [
      {
        url: "/images/profile.jpg", // Path to your profile image in /public
        width: 800, // Adjust dimensions as needed
        height: 600,
        alt: "Emmanuel Nyatepe Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Nyatepe | Software Engineer Portfolio",
    description: "Full-Stack Developer specializing in Next.js, React, Node.js. Available for hire.",
    // creator: "@yourTwitterHandle", // Optional: Add your Twitter handle
    images: ["/images/profile.jpg"], // Path to your profile image in /public
  },
  // Optional: Robots meta tags (complementary to robots.txt)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Optional: Icons/Favicons (place in /public or /app)
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}> {/* Apply variable to html tag */}
      <body className={`font-sans antialiased`}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
