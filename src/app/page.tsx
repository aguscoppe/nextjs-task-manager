'use client';
import Button from '@/components/Button';
import { TaskManager } from '@/components/TaskManager';
import { Task } from '@/types/task';
import { useEffect, useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  if (tasks.length === 0) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        Loading...
      </div>
    );
  }

  console.log({ tasks });

  const handleChange = (event: any) => {
    console.log('change', event.target.value);
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    console.log('search');
  };

  const handleAdd = () => {
    if (inputValue !== '') {
      setTasks((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          userId: 1,
          title: inputValue,
          completed: false,
        },
      ]);
      setInputValue('');
    }
  };

  return (
    <div className='m-12 flex flex-col justify-center items-center'>
      <h1 className='text-3xl my-4'>Welcome to your task manager</h1>
      <div className='flex flex-col'>
        <input
          className='p-2 outline-none text-black rounded'
          type='text'
          placeholder='Enter text'
          value={inputValue}
          onChange={handleChange}
        />
        <div className='flex justify-center'>
          <Button className='my-4 mx-2' onClick={handleSearch}>
            Search
          </Button>
          <Button className='my-4  mx-2' onClick={handleAdd}>
            + Add
          </Button>
        </div>
        {<TaskManager tasks={tasks} />}
      </div>
    </div>
  );
}
