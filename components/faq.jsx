import React from 'react';
import Container from './container';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Image from 'next/image';

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
      <div className="p-10"></div>
    </Container>
  );
}

const faqdata = [
  {
    question: 'Apa saja menu yang tersedia di Waroeng Mbak Fiah?',
    answer:
      'Kami menyajikan berbagai pilihan menu sayur mateng dan cemilan yang lezat dan berkualitas. Anda dapat mengecek menu kami di halaman Facebook kami di https://www.facebook.com/mamaknya.achsanin/about',
  },
  {
    question: 'Bagaimana cara memesan makanan di Waroeng Mbak Fiah?',
    answer:
      'Anda dapat memesan makanan di Waroeng Mbak Fiah dengan menghubungi kami di nomor +6281315126056 atau mengunjungi halaman Facebook kami di https://www.facebook.com/mamaknya.achsanin/about',
  },
  {
    question: 'Apakah Waroeng Mbak Fiah memiliki layanan pengantaran?',
    answer: 'Kami menyediakan layanan pengantaran.',
  },
  {
    question: 'Apakah Waroeng Mbak Fiah memiliki layanan untuk acara khusus?',
    answer:
      'Ya, kami menyediakan layanan untuk acara khusus seperti pesta, arisan, dll. Anda dapat menghubungi kami untuk informasi lebih lanjut dan untuk memesan menu yang sesuai dengan acara Anda.',
  },
];
