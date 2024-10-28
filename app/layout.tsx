import { AxiosInterceptor } from '@/libs/configs'
import { ThemeProvider } from '@/libs/providers'

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
