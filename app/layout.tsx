import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./globals.css";
import NavBar from "@/app/ui/navbar";

export const metadata: Metadata = {
  title: {
    default: "THM Leaderboard",
    template: "%s | THM Leaderboard",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="flex flex-col items-center px-2 w-screen min-h-full overflow-x-hidden">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
