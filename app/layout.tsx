import "./globals.css";
import { Inter as FontSans } from "next/font/google"

export const metadata = {
  title: 'To-do App',
  description: 'Created by Hakeem Alavi',
}
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
