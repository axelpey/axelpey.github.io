import React from "react";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-black font-serif selection:bg-gray-200">
      <nav className="p-4 flex justify-center">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-gray-800 transition-colors no-underline"
        >
          Home
        </Link>
      </nav>
      <main className="max-w-2xl mx-auto px-6 py-12 md:py-20">{children}</main>
    </div>
  );
}
