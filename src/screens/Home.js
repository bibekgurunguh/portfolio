import React, { useRef } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import 'scss/Home.scss';

import Intro from 'components/Intro';
import Sloth from 'components/Sloth';
import AboutMe from 'components/AboutMe';

function Home() {
  const introRef = useRef();
  const artistRef = useRef();
  const aboutMeRef = useRef();

  // scrollY = Y scroll position
  const { scrollY } = useViewportScroll();
  // useTransform interpolates values i.e. from if scrollY==0 value=0, if scrollY==500 value=1
  const topBtnScale = useTransform(scrollY, [0, 500], [0, 1]);

  const scrollOptions = { behavior: 'smooth' };

  const scrollTo = {
    top: () => introRef.current.scrollIntoView(scrollOptions),
    artist: () => artistRef.current.scrollIntoView(scrollOptions),
    aboutMe: () => aboutMeRef.current.scrollIntoView(scrollOptions),
  };

  return (
    <div className="screen">
      <motion.div
        onClick={() => scrollTo.top()}
        className="top-btn centered pointer"
        style={{ scale: topBtnScale }}
      >
        <div className="top-btn-arrow-wrapper">
          <div className="top-btn-arrow" />
        </div>
      </motion.div>

      <div ref={introRef}>
        <Intro scrollTo={scrollTo} />
      </div>
      <div ref={artistRef}>
        <Sloth scrollTo={scrollTo} />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe scrollTo={scrollTo} />
      </div>
    </div>
  );
}

export default Home;
