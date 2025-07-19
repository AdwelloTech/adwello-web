import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Sanity Studio - Adwello",
  description: "Content management for Adwello",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="h-screen w-full">{children}</div>
      </body>
    </html>
  );
}
