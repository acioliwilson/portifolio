import ThemeProviderWrapper from "./ThemeProviderWrapper"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Wilson Acioli | Desenvolvedor Full Stack | Next.js, React, Node.js",
  description:
    "Portfólio de Wilson Acioli, desenvolvedor full stack especializado em Next.js, React, Node.js e UI/UX Design. Crio aplicações modernas, rápidas e escaláveis para web e mobile.",
  keywords: [
    "Wilson Acioli",
    "Desenvolvedor Full Stack",
    "Next.js",
    "React",
    "Node.js",
    "UI/UX Design",
    "Portfólio",
    "Frontend",
    "Backend",
    "Desenvolvimento Web",
    "Desenvolvimento Mobile"
  ],
  authors: [{ name: "Wilson Acioli", url: "https://github.com/acioliwilson" }],
  openGraph: {
    title: "Wilson Acioli | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor full stack especializado em Next.js, React, Node.js e UI/UX Design. Veja meu portfólio de projetos web e mobile.",
    url: "https://seusite.com", // Troque pelo domínio real
    siteName: "Portfólio de Wilson Acioli",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html {
                font-family: ${GeistSans.style.fontFamily};
                --font-sans: ${GeistSans.variable};
                --font-mono: ${GeistMono.variable};
              }
            `,
          }}
        />
      </head>
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  )
}
