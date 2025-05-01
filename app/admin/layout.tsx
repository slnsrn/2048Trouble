'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-warmGray-50 dark:bg-gray-900">
      <header className="bg-amber-500 dark:bg-amber-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">2048Trouble Admin</h1>
          <Link href="/">
            <Button variant="outline" className="bg-white hover:bg-gray-100">
              Back to Game
            </Button>
          </Link>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}