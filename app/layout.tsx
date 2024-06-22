import "../style/globals.css";
import "../style/sidepanel.css";
import "../style/mobile-nav.css";
import "../style/loader.css";
import "../style/forms.css";
import "../style/home.css";
import "../style/adapter.css";
import "../style/backdrop.css";
//
import ClientWrapper from "./ClientWrapper";
import Head from "next/head";

export const metadata = {
  title: "Phonebook",
  description: "Public index for solana users.",
  openGraph: {
    title: "Phonebook",
    description: "Public index for solana users.",
    url: "https://emptea.xyz",
    siteName: "Phonebook",
    images: [
      {
        url: "https://2xh2yuvkthy62prifypm4znurziir7gwra7dg7e4pkp6yfgylbcq.arweave.net/1c-sUqqZ8e0-KC4ezmW0jlCI_NaIPjN8nHqf7BTYWEU",
        width: "500",
        height: "300",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phonebook.",
    description: "Public index for solana users.",
    creator: "@THEM2DT",
    images: [
      "https://2xh2yuvkthy62prifypm4znurziir7gwra7dg7e4pkp6yfgylbcq.arweave.net/1c-sUqqZ8e0-KC4ezmW0jlCI_NaIPjN8nHqf7BTYWEU",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientWrapper>{children}</ClientWrapper>
    </html>
  );
}
