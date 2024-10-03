import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { ToastProvider } from "@/providers/toast-context";
import "react-toastify/dist/ReactToastify.css";
import { QueryProvider } from "@/providers/query-provider.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grupo Don Quijote",
  description: "Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#fafafafd]`}>
        <QueryProvider>
          <ToastProvider>
            <Header />
            {children}
            <Footer />
          </ToastProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
