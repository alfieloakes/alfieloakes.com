import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="container px-4">
        <div className="grid sm:grid-cols-12 sm:my-20 md:my-48">
          <div className="sm:col-start-2 sm:col-span-10">
            <h1 className="text-lg sm:text-4xl font-bold sm:mb-8 mb-2">Hey, I&#39;m Alfie 👋 </h1>
            <p className="font-light text-sm sm:text-2xl sm:font-regular sm:mb-8 mb-2">Welcome to my corner of the internet!</p>
            <p className="text-base sm:text-3xl font-medium">I&#39;m a software engineer from the UK, working with Typescript, Golang and .NET</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
