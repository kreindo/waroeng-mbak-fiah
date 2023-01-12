import Image from 'next/image';
import Container from './container';
import heroImg from '../public/img/hero.png';
import { data } from '../public/img/product';
import { GiCook } from 'react-icons/gi';
import { TfiFacebook } from 'react-icons/tfi';
export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Makan Sehat, Hidup Sehat
            </h1>
            <p className="py-5 text-sm leading-normal text-gray-700 lg:text-md xl:text-xl dark:text-gray-400">
              Waroeng Mbak Fi'ah, sebuah warung makanan yang menjual sayur
              mateng dan cemilan lezat yang diolah dengan bahan-bahan
              berkualitas tinggi. Kami percaya bahwa makanan yang sehat dan
              bergizi dapat memberikan manfaat yang besar bagi kesehatan kita.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Whatsapp
              </a>
              <a
                href="https://github.com/web3templates/nextly-template/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <GiCook />
                <span>Visit our Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex relative items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="516"
              height="516"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
            {/* <div className="block lg:absolute left-1/2 top-5">
              <div className="relative">
                <div className="px-10 py-20 flex flex-col absolute left-10 z-10 justify-center items-center bg-white rounded-md shadow-md">
                  <GiCook color="black" size="32" className="p-2" />
                  <span className="p-2 text-black dark:text-white">
                    Cooked nice
                  </span>
                </div>
                <div className="p-10 flex absolute z-0 justify-center items-center bg-green-400 rounded-md shadow-md">
                  <GiCook color="black" size="32" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            {data.map((item, index) => {
              <div
                key={index}
                className="pt-2 text-gray-400 dark:text-gray-400"
              >
                <CardFood data={data} />
              </div>;
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

function CardFood({ data }) {
  return (
    <div className="p-2">
      <div className="flex px-24 py-36 flex-col justify-center rounded-md bg-gray-700 dark:bg-white items-center">
        test
        {data.map((item, index) => {
          return (
            <div className="w-24 h-36 bg-red-400 border border-blue-400 rounded-md">
              <Image
                key={index}
                className={'rounded-md'}
                layout="intrinsic"
                width={96}
                height={144}
                src={`/img/product${item}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
