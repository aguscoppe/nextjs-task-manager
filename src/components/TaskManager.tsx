import { Task } from '@/components/Task';
import { Task as TaskType } from '@/types/task';

export const TaskManager = ({ tasks }: { tasks: TaskType[] }) => {
  return (
    <div
      className='bg-emerald-500 rounded max-h-96 overflow-auto grid grid-cols-3 gap-6 p-6 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'
    >
      {tasks.length > 0 ? (
        tasks.map(({ id, title, completed }) => (
          <Task key={id} id={id} description={title} completed={completed} />
        ))
      ) : (
        <p className='p-8 text-black'>No tasks to display</p>
      )}
    </div>
  );
};
