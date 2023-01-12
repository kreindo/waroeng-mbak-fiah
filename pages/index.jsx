import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';

import { benefitOne, benefitTwo } from '../components/data';
import Video from '../components/video';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Apple from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Waroeng Mbak Fi'ah - Makan sehat, Hidup sehat</title>
        <meta
          name="description"
          content="Waroeng Mbak Fi'ah, sebuah warung makanan yang menjual sayur mateng dan cemilan lezat yang diolah dengan bahan-bahan berkualitas tinggi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <div id="Product" />
      <SectionTitle title="Traditional, Modern">
        Rasakan kenikmatan masakan tradisional dengan sentuhan modern di Waroeng
        Mbak Fi'ah. Warung makanan yang menyajikan sayur mateng dan cemilan yang
        lezat dan berkualitas. Dikelola oleh Mbak Fi'ah yang memiliki pengalaman
        dalam bidang masakan, semua makanan kami diolah dengan bahan-bahan segar
        dan dipastikan menyehatkan. Datanglah dan rasakan sensasi makan yang
        berbeda di Waroeng Mbak Fi'ah.
      </SectionTitle>
      <Benefits data={benefitOne} />

      <SectionTitle title="Harga terjangkau">
        Kami menyediakan berbagai macam menu dengan harga yang terjangkau. Kami
        yakin anda akan merasa puas dengan makanan yang kami sajikan.
      </SectionTitle>
      <Apple />
      <Faq />
      <Cta />
      <Footer />
      <script
        async
        src="https://whatsform.com/launcher.js"
        id="wf-widget"
        data-id="HLXJwB"
        data-message="Pesan lewat WhatsApp"
      ></script>
      {/* <PopupWidget /> */}
    </>
  );
}
