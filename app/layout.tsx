import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Space_Grotesk, Shippori_Mincho } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const mincho = Shippori_Mincho({
  subsets: ["latin"],
  variable: "--font-mincho",
  weight: "500",
});

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learning Japanese App",
  description: "Created by devari",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        sans.variable,
        "font-sans",
        mincho.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto border border-foreground/10 min-h-screen p-4">
            <Navbar />
            {children}
          </div>
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
