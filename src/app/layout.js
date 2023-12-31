import './globals.css'
import Header from "@/app/components/header";
import { Mulish } from 'next/font/google';

const mulish = Mulish({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
      <Header/>
      {children}
      </body>
    </html>
  )
}
