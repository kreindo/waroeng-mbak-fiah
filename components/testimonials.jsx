import Image from 'next/image';
import React from 'react';
import Container from './container';

export default function Apple() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="relative flex flex-col justify-between w-full h-full bg-gray-100 px-48 rounded-2xl py-48 dark:bg-trueGray-800">
            <Image
              src={'/img/product/1.jpg'}
              className="rounded-2xl"
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
        </div>
        <div className="">
          <div className="relative flex flex-col justify-between w-full h-full bg-gray-100 px-48 rounded-2xl py-48 dark:bg-trueGray-800">
            <Image
              src={'/img/product/2.jpg'}
              className="rounded-2xl"
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
        </div>
        <div className="">
          <div className="relative flex flex-col justify-between w-full h-full bg-gray-100 px-48 rounded-2xl py-48 dark:bg-trueGray-800">
            <Image
              src={'/img/product/3.jpg'}
              className="rounded-2xl"
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {' '}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{' '}
    </>
  );
}
