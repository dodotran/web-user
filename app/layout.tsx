import { AxiosInterceptor } from '@/libs/configs'
import { ThemeProvider } from '@/libs/providers'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          options={{
            key: 'theme-provider',
          }}
        >
          <AxiosInterceptor>{children}</AxiosInterceptor>
        </ThemeProvider>
      </body>
    </html>
  )
}
