'use client';

import * as React from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogFooter } from './ui/dialog';

interface ResetConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ResetConfirmationModal({
  open,
  onOpenChange,
  onConfirm,
  onCancel,
}: ResetConfirmationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-warmGray-100 dark:bg-gray-700 max-w-xs">
        <DialogHeader className="flex flex-row items-center gap-4">
          <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:h-10 sm:w-10">
            <img src="trouble-dark.png" alt="" />
          </div>
          <h3
            className="leading-normal text-xl text-warmGray-800 dark:text-warmGray-300"
            id="modal-headline"
          >
            Do you want to end the ongoing game?
          </h3>
        </DialogHeader>
        <DialogFooter className="flex justify-center md:justify-end gap-4">
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={onConfirm}>Ok</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
