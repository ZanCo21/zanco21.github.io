import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.min.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fauzan Alghifari',
  description: 'Portofolio 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-MJQkNp9Gs+RO7mVCdTrA8H3NXtjEldRqC/DnX4HT2xUg5h4eNZg9klcr3k9tYyBtyZT11zXLCM1tDEs4chTfA==" crossOrigin="anonymous"/>
        
          <title>Fauzan Alghifari</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/>

        </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
