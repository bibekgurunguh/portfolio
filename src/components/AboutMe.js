import React from 'react';
import { isMobile } from 'react-device-detect';
import 'scss/AboutMe.scss';

import twitterLogo from 'assets/twitter-logo.svg';
import cryptocomLogo from 'assets/cryptocom-logo.svg';

function AboutMe() {
  const twitterHandler = () => {
    window.open('https://twitter.com/bibekggNFT');
  };
  const cryptocomHandler = () => {
    window.open('https://crypto.com/nft/profile/beebek');
  };

  return (
    <div className="section centered" style={{ minHeight: 250 }}>
      <div className={`section-width ${isMobile ? 'col' : 'row'} centered`}>
        <div
          className="aboutme-btn pointer col centered"
          onClick={twitterHandler}
        >
          <img src={twitterLogo} alt="Twitter" className="aboutme-icon" />
          <div className="aboutme-text-big">@bibekggNFT</div>
        </div>

        {!isMobile && <div className="aboutme-line" />}

        <div
          className="aboutme-btn pointer col centered"
          onClick={cryptocomHandler}
        >
          <img
            src={cryptocomLogo}
            alt="Crypto.com NFT"
            className="aboutme-icon"
          />
          <div className="aboutme-text-big">@beebek</div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
