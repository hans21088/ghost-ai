'use client';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface BaseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

/**
 * Dialog Pattern
 *
 * Reusable dialog component that provides a consistent interface for
 * all dialog interactions in the editor. Supports title, description,
 * custom content, and footer actions.
 *
 * Usage:
 * ```tsx
 * <BaseDialog
 *   isOpen={isOpen}
 *   onClose={handleClose}
 *   title="Confirm Action"
 *   description="Are you sure?"
 *   footer={
 *     <>
 *       <Button variant="outline" onClick={handleClose}>Cancel</Button>
 *       <Button onClick={handleConfirm}>Confirm</Button>
 *     </>
 *   }
 * >
 *   {children}
 * </BaseDialog>
 * ```
 */
export function BaseDialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
}: BaseDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {children && <div className="py-4">{children}</div>}

        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}
