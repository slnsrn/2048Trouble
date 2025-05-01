import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2048Trouble',
  description: 'Play 2048 with a troubled start',
  openGraph: {
    type: 'website',
    title: '2048Trouble',
    url: 'https://2048Trouble.com',
    description: 'Play 2048 with a troubled start',
    images: [
      {
        url: 'https://2048Trouble.com/app-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '2048Trouble',
    site: '@slnsrn',
    description: 'Play 2048 with a troubled start',
    images: ['https://2048Trouble.com/app-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          data-ad-client="ca-pub-2322848954109478"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
