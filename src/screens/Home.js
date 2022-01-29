import React, { useRef } from 'react';
import 'scss/Home.scss';

import Intro from 'components/Intro';
import Sloth from 'components/Sloth';

function Home() {
  const introRef = useRef();
  const artistRef = useRef();

  const scrollOptions = { behavior: 'smooth' };

  const scrollTo = {
    top: () => introRef.current.scrollIntoView(scrollOptions),
    artist: () => artistRef.current.scrollIntoView(scrollOptions),
  };

  return (
    <div className="screen">
      <div onClick={() => scrollTo.top()} className="top-btn centered pointer">
        <div className="top-btn-arrow-wrapper">
          <div className="top-btn-arrow" />
        </div>
      </div>
      <div ref={introRef}>
        <Intro scrollTo={scrollTo} />
      </div>
      <div ref={artistRef}>
        <Sloth scrollTo={scrollTo} />
      </div>
    </div>
  );
}

export default Home;
