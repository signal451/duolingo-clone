import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "./_components/modals/exit-modal";


const font = Nunito({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700']
})


export const metadata: Metadata = {
  title: "Lingua",
  description: "Lingua a fun way to learn new languages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" >
        <body className={font.className}>
          {children}
          <ExitModal />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
