import { ReactNode } from "react"
import './styles/globals.css'
import Head from "next/head"
export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <head>
        <title>QrCode Profile</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      </head>
      <body>{children}</body>
    </html>
  )
}
