import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Tunde Adeniran',
    default: 'Tunde Adeniran - Co-Founder, Product Leader, & Innovator',
  },
  description:
    'I am Tunde Adeniran, a seasoned product leader with a passion for innovation and growth.',
  alternates: {
    types: {
      'application/rss+xml': 'https://example.com/feed.xml',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className=" h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
