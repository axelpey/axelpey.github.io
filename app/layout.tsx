import "./globals.css";
import { Poppins } from "next/font/google";
import type React from "react"; // Import React

const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Axel Peytavin",
  description: "Bringing agentic robots to everyone",
  icons: {
    icon: "/marin-mar-26.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
