import React from 'react';

export default function Footer() {
  return (
    <footer className="text-white mt-10">
      <div className=" container px-4">
        <div className="grid grid-cols-1 h-16 gap-4">
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
