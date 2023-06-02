import "@/shared/styles/globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";

import { Providers } from "@/shared/providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plataforma BrBatel",
  description:
    "A Plataforma de acesso das empresas ao Mercado de Capitais. Crédito a partir de R$ 20 milhões para empresas de todos os setores.",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="pt-br">
        <body className={inter.className}>
          <header className="w-full p-3 text-white font-bold bg-sky-500">
            <nav>
              <ul className="flex items-center justify-center gap-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="border-l-2 border-white pl-2">
                  <Link href="/fetch-client">Fetch Client</Link>
                </li>
                <li className="border-l-2 border-white pl-2">
                  <Link href="/fetch-server">Fetch Server</Link>
                </li>
                <li className="border-l-2 border-white pl-2">
                  <Link href="/other-layout">Other layout</Link>
                </li>
                <li className="border-l-2 border-white pl-2">
                  <Link href="/with-backend">With Backend</Link>
                </li>
                <li className="border-l-2 border-white pl-2">
                  <Link href="/form">Form</Link>
                </li>
                <li className="border-l-2 border-white pl-2">
                  <Link href="/matched-path">Matched Path</Link>
                </li>
                <li className="border-l-2 border-white pl-2">
                  <Link href="/with-params/1">With Params 1</Link>
                </li>
                <li className="border-l-2 border-white pl-2">
                  <Link href="/with-group/any">Any</Link>
                </li>
              </ul>
            </nav>
          </header>
          {children}
        </body>
      </html>
    </Providers>
  );
}
