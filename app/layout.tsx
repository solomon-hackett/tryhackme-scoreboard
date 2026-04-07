import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "THM Scoreboard",
    template: "%s | THM Scoreboard",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="flex flex-col items-center px-1 py-3 w-screen min-h-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
