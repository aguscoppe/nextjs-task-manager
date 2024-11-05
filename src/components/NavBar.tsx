import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.webp';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='bg-emerald-600 py-4 px-6 w-full flex flex-row justify-evenly'>
      <Link href='/'>
        <Image src={logo} alt='logo' width={24} height={24} />
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
