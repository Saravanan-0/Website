import React from 'react'
import "./about1.css"
import abouthead from "./assets/about-head.svg"

import video from "./assets/DigAmenD full service.mp4"
import ReactPlayer from 'react-player';

import { FaPlay } from 'react-icons/fa';
import { BsFullscreen } from 'react-icons/bs';

import { useEffect, useState, useRef } from "react";



function About1() {
  const playerRef = useRef(null);

  const handleFullscreen = () => {
    if (playerRef.current) {
      playerRef.current.wrapper.requestFullscreen();
    }
  };



  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleVideoPlay = () => {
    setVideoEnded(false);
  };



  return (

    <div id='about1' className='about1'>
      <div className="about11">
                <img width={400}  className="abouttt"src={abouthead}/>
            </div>
      <div className="frame-10">
        <div className="text-wrapper-3">Who we are</div>
        <p className="paraa111">
          DigAmenD is an asset focused company. Our asset is our employees. We do what we know to do and we enjoy
          doing it. Our focus is to help others get into the right path when it comes to the digital world. We
          specialize in providing digital solutions to clients. The solutions are focused on improving or solving
          specific business problems, leveraging various digital technologies such as consulting services, User
          experience enhancement and so on.
        </p>
      </div>
      <div className="video-player-container">
        <ReactPlayer
          ref={playerRef}
          url={video}
          width="100%"
          height="100%"
          playing={!videoEnded}
          onEnded={handleVideoEnd}
          onPlay={handleVideoPlay}
        />
        <div className='fullscreen-icon-overlay'>
        <BsFullscreen  onClick={handleFullscreen} size={25} />
          {/* <button className='full-button' >
           
          </button> */}
        </div>

        {videoEnded && (
          <div className="play-icon-overlay">
            <FaPlay size={50} onClick={() => setVideoEnded(false)} />
          </div>
        )}

      </div>
      <div className="Interest">
        <div className="first22">
          <h1 className="head77">We turn your interest into reality !!!</h1>
          <p className="para88">Together as a team, we unite to design and deliver projects we're passionate about</p>
        </div>
        <div className="boxes3">
          <div className="boxess1">
            <h3 className="glimpse"> Glimpse of our making</h3>
            <p className="pglimpse">We're excited to unveil the foundation we've laid
              for DigAmenD, offering you a glimpse into the creative process that drives
              our vision and the journey that brought DigAmenD to life.</p>

          </div>
          <div className="boxess2">
            <h3 className="whatwe"> What we know</h3>
            <p className="pwhatwe">We're the link between creativity and technology, focusing on
              user-centered solutions. Partner with us to stay at the cutting edge of industry trends
              and witness our mastery in action.</p>

          </div>
          <div className="boxess3">
            <h3 className="weteach"> What we teach</h3>
            <p className="pweteach">We unlock the art of design and development extends to sharing our
              knowledge from our expertise to contribute on our journey to inspire the next generation of digital pioneers.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About1