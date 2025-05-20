export default function rootLayout({ children }: React.PropsWithChildren) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  )
}
