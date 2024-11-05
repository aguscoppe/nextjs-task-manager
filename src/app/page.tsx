'use client';
import Button from '@/components/Button';

export default function Home() {
  const handleSearch = () => {
    console.log('search');
  };

  const handleAdd = () => {
    console.log('add');
  };

  return (
    <div className='m-12 text-center'>
      <h1 className='text-3xl my-4'>Welcome to your task manager</h1>
      <div className='flex flex-col'>
        <input
          className='p-2 outline-none text-black rounded'
          type='text'
          placeholder='Enter text'
        />
        <div className='flex justify-center'>
          <Button className='my-4 mx-2' onClick={handleSearch}>
            Search
          </Button>
          <Button className='my-4  mx-2' onClick={handleAdd}>
            + Add
          </Button>
        </div>
      </div>
    </div>
  );
}
