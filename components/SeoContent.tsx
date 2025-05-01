import React from 'react';
import Link from 'next/link';

const mobileHowTo =
  'Move the tiles, add them up to reach 2048 and even more!. If you are bored to start from 0, choose a trouble level!';
const desktopHowTo =
  'Use your arrow keys to move the tiles, add them up to reach 2048 and even more!. If you are bored to start from 0, choose a trouble level!';

export default function SeoContent({ isMobile = false }) {
  return (
    <div className="text-lg py-6 px-6 max-w-xl mx-auto text-warmGray-700 dark:text-blue-300">
      <div className="lg:px-16">
        <h2 className="font-bold italic">HOW TO PLAY:</h2>
        <p>{isMobile ? mobileHowTo : desktopHowTo}</p>
        <div></div>
        <h3 className="mt-4 italic font-bold text-sm text-indigo-400 text-right">
          Take a look at other{' '}
          <Link href="https://selinthecool.com/" className="underline">
            Cool&apos;s game &rarr;
          </Link>
        </h3>
        <h3 className="mt-2 italic font-bold text-sm text-indigo-400 text-right">
          Check the{' '}
          <Link href="https://github.com/slnsrn/2048Trouble">
            source code &rarr;
          </Link>
        </h3>
      </div>
    </div>
  );
}
