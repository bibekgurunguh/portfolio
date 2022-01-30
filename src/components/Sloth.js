import React from 'react';
import { isMobile } from 'react-device-detect';
import 'scss/Sloth.scss';

import sloth1 from 'assets/sloth1.jpg';
import sloth2 from 'assets/sloth2.jpg';
import sloth3 from 'assets/sloth3.jpg';
import sloth4 from 'assets/sloth4.jpg';

function Sloth() {
  return (
    <div className={`sloth section centered`}>
      <div className={`section-width ${isMobile ? 'col' : 'row'} centered`}>
        <div className="sloth-images centered">
          <img src={sloth1} alt="sloth1" className="sloth-image sloth1" />
          <img src={sloth2} alt="sloth2" className="sloth-image sloth2" />
          <img src={sloth3} alt="sloth3" className="sloth-image sloth3" />
          <img src={sloth4} alt="sloth4" className="sloth-image sloth4" />
        </div>
        <div className="sloth-text" style={{ paddingLeft: !isMobile && 20 }}>
          <h2 style={{ textShadow: '1px 1px 5px #00000080' }}>Silly Sloths</h2>
          <span className="bold">Silly Sloths</span> is a collection of
          generative digital art, generated using Sloth Generator ( a self-made
          private app). Currently, looking for a marketplace to put these up as
          NFTs.
        </div>
      </div>
    </div>
  );
}

export default Sloth;
