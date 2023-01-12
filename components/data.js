import {
  ChartSquareBarIcon,
  HeartIcon,
  CursorClickIcon,
  // DeviceMobileIcon,
  // AdjustmentsIcon,
  // SunIcon,
} from '@heroicons/react/outline';

import benefitOneImg from '../public/img/benefit-one.jpg';
// import benefitTwoImg from '../public/img/benefit-two.jpg';

const benefitOne = {
  title: 'Kenapa belanja di waroeng mba fiah?',

  image: benefitOneImg,
  bullets: [
    {
      title: 'Makanan yang sehat dan berkualitas',
      desc: 'Semua makanan yang kami sajikan diolah dengan bahan-bahan segar dan dipastikan menyehatkan.',
      icon: <HeartIcon />,
    },
    {
      title: 'Pengalaman masakan yang berbeda',
      desc: 'Rasakan sensasi makan yang berbeda dengan menu sayur mateng dan cemilan yang lezat dan unik.',
      icon: <ChartSquareBarIcon />,
    },
    {
      title: 'Pilihan yang luas',
      desc: 'Kami menyajikan berbagai pilihan menu yang dapat Anda pilih sesuai selera Anda',
      icon: <CursorClickIcon />,
    },
  ],
};

// const benefitTwo = {
//   title: 'Offer more benefits here',
//   desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
//   image: benefitTwoImg,
//   bullets: [
//     {
//       title: 'Mobile Responsive Template',
//       desc: 'Nextly is designed as a mobile first responsive template.',
//       icon: <DeviceMobileIcon />,
//     },
//     {
//       title: 'Powered by Next.js & TailwindCSS',
//       desc: 'This template is powered by latest technologies and tools.',
//       icon: <AdjustmentsIcon />,
//     },
//     {
//       title: 'Dark & Light Mode',
//       desc: 'Nextly comes with a zero-config light & dark mode. ',
//       icon: <SunIcon />,
//     },
//   ],
// };

export {
  benefitOne,
  //  benefitTwo
};
