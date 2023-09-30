import React from 'react';

export default function About() {
  return (
    <div className="container px-4 mb-4">
      <div className="grid sm:grid-cols-1 gap-4">
        <div className="col-span-12">
          <p className="text-lg sm:text-2xl font-bold mb-4">About Me</p>
          <p className="mb-4">I&apos;m a software engineer working in London at a leading fintech company. My tech stack consists of Typescript, Node.JS, .NET and Golang.</p>
          <p className="mb-4">In my free time I enjoy playing cricket for my local team, long walks with our sausage dog and watching movies and TV shows.</p>
          <p className="mb-4">This website serves as a hub where I showcase my thoughts through blog posts.</p>
        </div>
      </div>
    </div>
  );
}
