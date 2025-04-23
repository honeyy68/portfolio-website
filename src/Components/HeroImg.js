import React, { useState, useEffect } from 'react';
import "./HeroImgStyle.css";
import introImg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

const HeroImg = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Designer", "UI/UX Designer", "Web Developer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);
  const period = 1000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setDelta(500);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, loopNum, isDeleting]);

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="Background" />
      </div>
      <div className="content">
        <h1 className="fade-in">Hi, I'm <span className="highlight">Asra Nawaz</span></h1>
        <h2 className="slide-up">And</h2>
        <p className="typewriter">I am <span>{text}</span></p>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

