import React from 'react';
import Link from 'next/link';
import { FaQuinscape } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className='bg-emerald-600 py-4 px-6 w-full flex flex-row justify-evenly'>
      <Link href='/'>
        <FaQuinscape style={{ fontSize: '24px' }} />
      </Link>
      <ul className='w-full flex flex-row justify-end'>
        <Link href='/'>
          <li className='mr-4'>Home</li>
        </Link>
        <Link href='/about'>
          <li className='mr-4'>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
