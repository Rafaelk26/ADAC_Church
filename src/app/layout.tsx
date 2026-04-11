import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/assets/ADACLogoRedonda.svg",
  },
  title: "ADAC Church | Simplismente Célula",
  description: "ADAC Church é uma igreja cristã localizada em Caraguatatuba, São Paulo, Brasil. Fundada em 2006, a ADAC tem como missão compartilhar o amor de Deus e promover a transformação de vidas por meio do evangelho. A igreja oferece uma variedade de ministérios e atividades para atender às necessidades espirituais, emocionais e sociais de seus membros e da comunidade em geral. Com uma abordagem acolhedora e inclusiva, a ADAC busca ser um lugar onde as pessoas possam encontrar esperança, propósito e crescimento espiritual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
