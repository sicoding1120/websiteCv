import React from 'react'
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const BtnGithub = () => {
  return (
    <Link
      href={"https://github.com/sicoding1120"}
      className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 p-3 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-6 py-1 border text-left text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
    >
      <FaGithub size={40} className="text-white" />
      Github
    </Link>
  );
}

export default BtnGithub