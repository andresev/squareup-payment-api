import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="p-5 bg-cyan-500">
      <Link
        href="/"
        className="px-2 py-1 bg-white text-blue-500 rounded-lg mx-2.5"
      >
        Home
      </Link>
      <Link
        href="/todos"
        className="px-2 py-1 bg-white text-blue-500 rounded-lg mx-2.5"
      >
        Todos
      </Link>
      <Link
        href="/pay"
        className="px-2 py-1 bg-white text-blue-500 rounded-lg mx-2.5"
      >
        Payment Form
      </Link>
      <Link
        href="/menu"
        className="px-2 py-1 bg-white text-blue-500 rounded-lg mx-2.5"
      >
        Menu
      </Link>
    </header>
  );
};

export default Header;
