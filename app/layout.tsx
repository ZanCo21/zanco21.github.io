// import './globals.css'
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
          <title>Fauzan Alghifari</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/>
          <script async  src="/js/jquery.min.js" />
          <script async src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossOrigin="anonymous"></script>
        </head>
      <body className={inter.className}>
        {children}
        <script async  type='module' src="js/data.js"></script>
      </body>
    </html>
  )
}
