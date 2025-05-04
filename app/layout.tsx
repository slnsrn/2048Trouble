import '../styles/globals.css'
import type { Metadata } from 'next'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1763623572416984"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className='overflow-hidden'>
        {children}

        {/* Hidden SEO content - visible to search engines but not to users */}
        <div
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: '0',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: '0',
          }}
          aria-hidden="true"
        >
          <h2>2048Trouble - The Ultimate Number Puzzle Game</h2>
          <p>
            Challenge yourself with 2048Trouble, a unique twist on the classic
            2048 puzzle game. Unlike the traditional version where you start
            with clean tiles, 2048Trouble begins with a "troubled" board, making
            the gameplay more challenging and strategic.
          </p>
          <p>
            Features of 2048Trouble: - Multiple difficulty levels: Easy, Medium,
            and Hard - Intuitive swipe and keyboard controls - Beautiful
            animations and visual effects - Responsive design that works on all
            devices - Track your high scores and challenge friends
          </p>
          <p>
            How to play: Swipe to move tiles, combine same-numbered tiles to
            create larger numbers, and try to reach the 2048 tile! But be
            careful - in 2048Trouble, you'll start with a board that's already
            filled with tiles, making each move crucial to your success.
          </p>
          <p>
            Perfect for puzzle enthusiasts, strategy gamers, and anyone looking
            for a fun mental challenge!
          </p>
        </div>
      </body>
    </html>
  )
}
