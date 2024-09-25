import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "home page",
  description: 'home page of next js and typescript application'
}

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