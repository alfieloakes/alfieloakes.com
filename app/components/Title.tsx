import React from 'react';

interface Props {
  title: string
}

export default function Title({ title }: Props) {
  return (
    <header className="container px-4">
      <div className="grid grid-cols-1 my-6 sm:my-10 md:my-10 gap-4">
        <h1 className="text-lg sm:text-4xl font-bold">{title}</h1>
      </div>
    </header>
  );
}
