'use client';

import React, { useState } from 'react';

export default function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav className="container px-4">
      <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-12 gap-4 h-16">
        <span className="col-span-3 md:col-span-2 lg:col-span-9 text-lg sm:text-2xl font-bold uppercase flex items-center">Alfie Loakes</span>

        <div className="hidden md:flex md:col-span-1 lg:col-span-3 items-center place-content-between">
          <a href="/">About</a>
          <a href="/">Blog</a>
          <a href="https://github.com/alfieloakes" target="_blank" rel="noreferrer">Github</a>
          <a href="/">X/Twitter</a>
        </div>

        <div className="md:hidden flex justify-end">
          <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setMobileNav(!mobileNav)}>
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {mobileNav && (
      <div className="md:hidden flex flex-col flex-stretch text-center content-center gap-y-1">
        <a className="grow rounded-md bg-slate-200 h-10 leading-10" href="/">About</a>
        <a className="grow rounded-md bg-slate-50 h-10 leading-10" href="/">Blog</a>
        <a className="grow rounded-md bg-slate-50 h-10 leading-10" href="https://github.com/alfieloakes" target="_blank" rel="noreferrer">Github</a>
        <a className="grow rounded-md bg-slate-50 h-10 leading-10" href="/">X/Twitter</a>
      </div>
      )}
    </nav>
  );
}
