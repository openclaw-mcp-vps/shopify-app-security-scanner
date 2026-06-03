import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify App Security Scanner — Scan Before You Install',
  description: 'Analyze Shopify apps for malicious code, suspicious permissions, and data theft risks before installing them in your store.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d458348d-2e5b-474e-b24b-2b8e6ba9850f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
