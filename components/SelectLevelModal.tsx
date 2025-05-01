'use client';

import * as React from 'react';
import { Level } from '../utils/trouble';
import { Dialog, DialogContent } from './ui/dialog';

interface SelectLevelModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (level: Level) => void;
}

export function SelectLevelModal({
  open,
  onOpenChange,
  onConfirm,
}: SelectLevelModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-warmGray-100 dark:bg-gray-700 text-warmGray-700 dark:text-warmGray-300 p-0">
        <div
          className="ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            onClick={() => {
              onConfirm(Level.EASY);
              onOpenChange(false);
            }}
            className="w-full p-4 hover:bg-gray-100 hover:text-gray-900 font-bold"
            role="menuitem"
          >
            Easy
          </button>
          <button
            onClick={() => {
              onConfirm(Level.MEDIUM);
              onOpenChange(false);
            }}
            className="w-full p-4 hover:bg-gray-100 hover:text-gray-900 font-bold"
            role="menuitem"
          >
            Medium
          </button>
          <button
            onClick={() => {
              onConfirm(Level.HARD);
              onOpenChange(false);
            }}
            className="w-full p-4 hover:bg-gray-100 hover:text-gray-900 font-bold"
            role="menuitem"
          >
            Hard
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
