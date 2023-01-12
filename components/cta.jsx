import React from 'react';
import Container from './container';
import { GiPhone } from 'react-icons/gi';

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">Pesan sekarang!</h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Nikmati berbagai pilihan menu masakan sekarang!.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://api.whatsapp.com/send?phone=6281315126056"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-5 lg:px-7 lg:py-5 "
          >
            <span className="flex gap-2 justify-center items-center">
              <GiPhone />
              Hubungi kami
            </span>
          </a>
        </div>
      </div>
    </Container>
  );
}
