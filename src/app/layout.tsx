import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Select Dropdown",
  description: "Next.js + Tailwind + Headless UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          {children}
        </div>
      </body>
    </html>
  );
}
