import './globals.css'

export const metadata = {
  title: 'Mini-test',
  description: 'Some kind of description',
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
