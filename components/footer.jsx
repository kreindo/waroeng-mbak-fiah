import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { GiCook } from 'react-icons/gi';
import { TfiGithub } from 'react-icons/tfi';
import Container from './container';

export default function Footer() {
  const navigation = ['Product', 'Features', 'Pricing'];
  // const legal = ['Terms', 'Privacy', 'Legal'];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {' '}
              <Link href="/">
                <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                  <span>
                    <GiCook />
                  </span>
                  <span>Waroeng Mbak Fi'ah</span>
                </a>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Waroeng Mbak Fi'ah, sebuah warung makanan yang menjual sayur
              mateng dan cemilan lezat yang diolah dengan bahan-bahan
              berkualitas tinggi. Kami percaya bahwa makanan yang sehat dan
              bergizi dapat memberikan manfaat yang besar bagi kesehatan kita.
            </div>

            <div className="mt-5">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                <Image
                  src="/img/vercel.svg"
                  layout="responsive"
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href={`#${item}`}>
                  <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                    {item}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          {/* <div>
            <div
              id="apple"
              className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0"
            >
              {legal.map((item, index) => (
                <Link key={index} href="/">
                  <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                    {item}
                  </a>
                </Link>
              ))}
            </div>
          </div> */}
          <div className="">
            <div>Ikuti</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://facebook.com/mamaknya.achsanin/photos"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{' '}
          <a
            href="https://ahmadsan.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            ahmadsan.
          </a>{' '}
          Illustrations from{' '}
          <a href="https://www.google.com/" target="_blank" rel="noopener ">
            The Internet
          </a>
        </div>
      </Container>
      {/* Do not remove this */}
      <Backlink />
    </div>
  );
}

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const Backlink = () => {
  return (
    <a
      href="https://ahmadsan.netlify.app"
      target="_blank"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300"
    >
      <TfiGithub />

      <span>ahmadsan</span>
    </a>
  );
};
