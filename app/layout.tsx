import type { Metadata } from "next";
import "./globals.css";
import NoiseFilter from "./components/BackgroundNoise";
import Nav from "./layout/navbar";

export const metadata: Metadata = {
  title: "Main Street Playhouse",
  description: "Made by Enoch Whitaker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#ECE6D8] flex w-full min-h-screen">
        <div className="w-screen desk:w-[1200px] desk:max-w-[1200px] avg:w-[800px] mobile:w-[500px]">
          <Nav />
          <NoiseFilter />
          {children}
        </div>
      </body>
    </html>
  );
}
