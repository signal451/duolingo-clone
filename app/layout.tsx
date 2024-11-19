import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "./_components/modals/exit-modal";
import { HeartsModal } from "./_components/modals/hearts-modal";


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


const localization = {
  signUp: {
    start: {
      title: 'Бүртгүүлэх',
      subtitle: '{{applicationName}} платформ дээр бүртгүүлээд гадаад хэлийг амархан сур',
      actionText: 'Та бүртгэлтэй бол',
      actionLink: 'Нэвтрэх',
    },
    emailCode: {
      title: 'Verify your email',
      subtitle: 'to continue to {{applicationName}}',
      formTitle: 'Verification code',
      formSubtitle: 'Enter the verification code sent to your email address',
      resendButton: "Didn't receive a code? Resend",
    },
    continue: {
      title: 'Fill in missing fields',
      subtitle: 'to continue to {{applicationName}}',
      actionText: 'Have an account?',
      actionLink: 'Sign in',
    },
  },
  signIn: {
    start: {
      title: "Нэвтрэх",
      subtitle: "Тоглоом тоглож байгаа шиг гадаад хэлийг суръя ",
      actionLink: 'Бүртгүүлэх',
      actionText: "Шинээр ирж байна уу?"
    },

    password: {
      actionLink: 'Use another method',
      subtitle: '',
      title: 'Нууц үг оруулна уу',
    },
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en" >
        <body className={font.className}>
          {children}
          <ExitModal />
          <Toaster />
          {/* <HeartsModal /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
