"use client";

import { useState, useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars"; 
import "overlayscrollbars/overlayscrollbars.css"; // Import OverlayScrollbars CSS before your global styles
import "./global.css"; // Import your global styles after
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    OverlayScrollbars(document.body, {
      scrollbars: {
        autoHide: "scroll",
      },
    });
  }, []);

  return (
    <html
      lang="en"
      className={cx(
        "text-white bg-black dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body
        className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto"
        style={{ transform: "scale(1.0)", transformOrigin: "top left" }}
      >
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
