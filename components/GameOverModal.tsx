'use client';

import * as React from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogFooter } from './ui/dialog';

interface GameOverModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export function GameOverModal({
  open,
  onOpenChange,
  onConfirm,
  onCancel,
}: GameOverModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-warmGray-100 dark:bg-gray-700">
        <DialogHeader className="flex flex-row items-center gap-4">
          <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:h-10 sm:w-10">
            <img src="trouble-dark.png" alt="" />
          </div>
          <h3
            className="text-xl font-medium text-warmGray-800 dark:text-warmGray-300"
            id="modal-headline"
          >
            Game is over!
          </h3>
        </DialogHeader>
        <DialogFooter className="flex justify-center md:justify-end gap-4 pt-2">
          <Button onClick={onCancel}>Reset</Button>
          <Button onClick={onConfirm}>Start over</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
