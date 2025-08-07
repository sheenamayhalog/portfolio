import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useEffect, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const meta = {
    title: "Sheena Halog - Full Stack Software Engineer",
    description: `I've been working on Software development for more than 5 years. Get in touch with me to know more.`,
    image: "/img/profile.png",
    type: "website",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* to be modified */}
        <meta property="og:url" content={`https://anaflous.com`} />
        {/* to be modified */}
        <link rel="canonical" href={`https://anaflous.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Portfoio" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>

      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full">
        <Header finishedLoading={true} sectionsRef={homeRef} />
        <MyName finishedLoading={true} />
        <SocialMediaArround finishedLoading={true} />

        <AboutMe ref={aboutRef} />

        <WhereIHaveWorked />
        <SomethingIveBuilt />
        <GetInTouch />

        {/* url to be modified later */}
        <Footer
          githubUrl={"https://github.com/hktitof/my-website"}
          hideSocialsInDesktop={true}
        />
      </div>
    </>
  );
}
