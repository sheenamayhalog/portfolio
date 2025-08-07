import React, { useRef, useState, useEffect } from "react";

import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import { motion } from "framer-motion";

const Header = (props: { finishedLoading: boolean; sectionsRef }) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 10400);
  }, []);

  console.log("rotate from header : ", rotate);
  //veify document for serverSide rendering
  if (typeof document !== "undefined") {
    rotate
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  return (
    <>
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        ShowElement={ShowElement}
      />

      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 9.4, duration: 0 },
        }}
        className={`w-full fixed ${
          ShowElement ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `
        } bg-AAprimary flex justify-end px-6 sm:px-12 py-2 sm:py-4  transition duration-4000 translate-y-0 z-20`}
      >
        <IconMenu
          rotate={rotate}
          setRotate={setRotate}
          setShowElement={setShowElement}
          ShowElement={ShowElement}
          finishedLoading={props.finishedLoading}
        />

        <DesktopMenu finishedLoading={props.finishedLoading} />
      </motion.div>
    </>
  );
};
export default Header;
