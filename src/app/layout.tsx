import { AppProvider } from "@/contexts"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Pokedex",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <AppProvider>
          <main className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-2 p-8">
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  )
}
