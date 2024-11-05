"use client";
import { AxiosInterceptor } from '@/libs/configs'
import { ThemeProvider } from '@/libs/providers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // default: true
          },
        },
      })
  );
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          options={{
            key: 'theme-provider',
          }}
        >
          <QueryClientProvider client={queryClient}>
            <AxiosInterceptor>{children}</AxiosInterceptor>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
