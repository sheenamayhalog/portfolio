import React from "react";
import { motion } from "framer-motion";

interface MyNameProps {
  finishedLoading: boolean;
}

const MyName: React.FC<MyNameProps> = (props) => {
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52 relative" // Added relative for potential scroll indicator
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.4,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.4,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Sheena May Halog.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        I make ideas happen.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a{" "}
        <span className="text-AAsecondary keyword-hover">
          Full Stack Software Engineer
        </span>{" "}
        with a solid foundation in{" "}
        <span className="text-AAsecondary keyword-hover">
          full stack development{" "}
        </span>
        and a passion for building user-centered digital experiences.
        <br className="3xl:block hidden" />
        I’ve worked on both{" "}
        <span className="text-AAsecondary keyword-hover">
          frontend
        </span> and{" "}
        <span className="text-AAsecondary keyword-hover">backend systems</span>,
        and enjoy tackling complex problems that lead to innovative,
        high-quality solutions. I’ve also had the opportunity to{" "}
        <span className="text-AAsecondary keyword-hover">mentor</span> teammates
        and contribute to{" "}
        <span className="text-AAsecondary keyword-hover">collaborative</span>{" "}
        development efforts. I’m eager to work on dynamic projects that
        challenge me to grow and make a meaningful impact.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary transition-transform duration-300 ease-out resume-button-hover">
            Check out my resume!
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default MyName;
