import Button from '@/components/Button';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonText?: string;
  secondaryButtonAction?: () => void;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  primaryButtonText = 'Yes',
  primaryButtonAction,
  secondaryButtonText = 'No',
  secondaryButtonAction,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-gray-200 rounded-lg shadow-lg w-1/3'>
        <div className='flex justify-end p-2'>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            &times;
          </button>
        </div>
        <div className='flex justify-center p-4'>{children}</div>
        <div className='flex justify-center p-4 space-x-2'>
          {secondaryButtonAction && (
            <Button onClick={secondaryButtonAction}>
              {secondaryButtonText}
            </Button>
          )}
          {primaryButtonAction && (
            <Button onClick={primaryButtonAction}>{primaryButtonText}</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
