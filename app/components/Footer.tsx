import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className=" container px-4">
        <div className="grid grid-cols-1 h-16">
          <span className="text-xs font-extralight flex items-center">
            &copy; Copyright
            {' '}
            {new Date().getFullYear()}
            {' '}
            Alfie Loakes
          </span>
        </div>
      </div>
    </footer>
  );
}
