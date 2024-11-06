import Modal from '@/components/Modal';
import { useState } from 'react';

export const Task = ({
  id,
  description,
  completed,
}: {
  id: number;
  description: string;
  completed: boolean;
}) => {
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);

  const handleOpenModal = () => {
    setCurrentTaskId(id);
  };

  const handleCloseModal = () => {
    setCurrentTaskId(null);
  };

  return (
    <>
      <div className='bg-black py-4 px-6 rounded'>
        <div className='flex justify-between items-center'>
          <p className='text-left text-gray-400 text-xs'>
            {completed ? 'Complete' : 'Incomplete'}
          </p>
          <p
            className='text-gray-400 text-xs cursor-pointer'
            onClick={handleOpenModal}
          >
            x
          </p>
        </div>
        <p>{description}</p>
      </div>
      {currentTaskId ? (
        <Modal
          isOpen={Boolean(currentTaskId)}
          onClose={handleCloseModal}
          primaryButtonAction={() => {}}
          secondaryButtonAction={handleCloseModal}
        >
          <p className='text-black text-center'>
            Are you sure you want to remove this task?
          </p>
        </Modal>
      ) : null}
    </>
  );
};
