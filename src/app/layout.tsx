import './globals.css'
import { CartProvider } from './context/CartContext'
import { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bites - Delicious Food Delivered',
  description: 'Order your favorite dishes from our restaurant. Fresh, fast, and delicious!',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
