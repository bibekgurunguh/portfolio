import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import 'scss/Intro.scss';

import artistLogo from 'assets/artist.svg';
import animatorLogo from 'assets/animator.svg';
import vEditorLogo from 'assets/v_editor.svg';
import developerLogo from 'assets/developer.svg';

function Intro({ scrollTo }) {
  const [activeHover, setActiveHover] = useState('artist');

  useEffect(() => {
    if (isMobile) {
      const states = ['artist', 'animator', 'editor', 'developer'];
      let i = 0;
      const interval = setInterval(() => {
        if (i < states.length - 1) {
          i++;
        } else {
          i = 0;
        }
        setActiveHover(states[i]);
      }, 1500);
      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <div className="intro section centered">
      <div className={`section-width ${isMobile ? 'col' : 'row'} centered`}>
        <div className="images-frame centered">
          <motion.div
            className="circle"
            animate={
              activeHover === 'artist'
                ? { transform: 'rotate(45deg)', borderLeftColor: 'lightblue' }
                : activeHover === 'animator'
                ? {
                    transform: 'rotate(135deg)',
                    borderLeftColor: 'deepskyblue',
                  }
                : activeHover === 'editor'
                ? {
                    transform: 'rotate(225deg)',
                    borderLeftColor: 'cornflowerblue',
                  }
                : activeHover === 'developer'
                ? {
                    transform: 'rotate(315deg)',
                    borderLeftColor: 'darkslateblue',
                  }
                : null
            }
          />
          <motion.img
            className="image"
            animate={
              activeHover === 'artist'
                ? { transform: 'scale(1)', opacity: 1.5 }
                : { transform: 'scale(0)', opacity: 0 }
            }
            src={artistLogo}
            alt="artist logo"
          />
          <motion.img
            className="image"
            animate={
              activeHover === 'animator'
                ? { transform: 'scale(1)', opacity: 1.5 }
                : { transform: 'scale(0)', opacity: 0 }
            }
            src={animatorLogo}
            alt="animator logo"
          />
          <motion.img
            className="image"
            animate={
              activeHover === 'editor'
                ? { transform: 'scale(1)', opacity: 1.5 }
                : { transform: 'scale(0)', opacity: 0 }
            }
            src={vEditorLogo}
            alt="video editor logo"
          />
          <motion.img
            className="image"
            animate={
              activeHover === 'developer'
                ? { transform: 'scale(1)', opacity: 1.5 }
                : { transform: 'scale(0)', opacity: 0 }
            }
            src={developerLogo}
            alt="developer logo"
          />
        </div>

        <div
          className="buttons-frame col centered"
          style={{
            alignItems: 'flex-start',
            paddingLeft: !isMobile && 20,
            paddingTop: isMobile && 20,
          }}
        >
          <div
            className="button pointer"
            onMouseOver={() => setActiveHover('artist')}
            onClick={() => scrollTo.artist()}
          >
            ARTIST
          </div>
          <div
            className="button pointer"
            onMouseOver={() => setActiveHover('animator')}
          >
            ANIMATOR
          </div>
          <div
            className="button pointer"
            onMouseOver={() => setActiveHover('editor')}
          >
            VIDEO EDITOR
          </div>
          <div
            className="button pointer"
            onMouseOver={() => setActiveHover('developer')}
          >
            DEVELOPER
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
