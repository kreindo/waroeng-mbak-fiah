import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';

import { benefitOne, benefitTwo } from '../components/data';
import Video from '../components/video';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';
// import PopupWidget from '../components/popupWidget';

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
      <SectionTitle title="Kenapa beli disini?">
        Rasakan kenikmatan masakan tradisional dengan sentuhan modern di Waroeng
        Mbak Fi'ah. Warung makanan yang menyajikan sayur mateng dan cemilan yang
        lezat dan berkualitas. Dikelola oleh Mbak Fi'ah yang memiliki pengalaman
        dalam bidang masakan, semua makanan kami diolah dengan bahan-bahan segar
        dan dipastikan menyehatkan. Datanglah dan rasakan sensasi makan yang
        berbeda di Waroeng Mbak Fi'ah.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <script
        async
        src="https://whatsform.com/launcher.js"
        id="wf-widget"
        data-id="HLXJwB"
        data-message="Message on WhatsApp"
      ></script>
      {/* <PopupWidget /> */}
    </>
  );
}