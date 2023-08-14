import React from 'react';
import Image from 'next/image';
import Title from '../components/Title';

export default function Home() {
  return (
    <>
      <Title title="About me!" />

      <div className="container px-4">
        <div className="grid sm:grid-cols-12 gap-4">
          <div className="sm:col-span-6 md:col-span-8">
            <p className="mb-4">Hey there, I&#39;m Alfie – your friendly neighborhood software engineer working in the bustling city of London.</p>
            <p className="mb-4">Welcome to my corner of the internet, a hub where I showcase my thoughts through blog posts and simplify the complex with tutorials.</p>
            <p className="mb-4">Curious about my coding escapades? Swing by my Github repository and check out my socials for a peek into my world. Feel like saying hi? Drop me an email at hello@alfieloakes.com – I&#39;m all ears for new connections!</p>
          </div>
          <div className="sm:col-span-6 md:col-span-4 h-60 sm:aspect-auto w-full bg-gray-100 relative ">
            <Image
              className="object-cover"
              src="/me.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </>
  );
}
