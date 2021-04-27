import React, { Component, useEffect, useState } from 'react';
import Parallax from 'react-rellax';
import './About.scss'

function About() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const renderContent = () => (
      <>
        <div className="Parallax__content__heading">
          <h1 className="Parallax__content__heading__text">Parallax</h1>
          <h2 className="Parallax__content__heading__caption">

          </h2>
        </div>
        <div className="Parallax__content__cta">
          <p>
            <b>1. Test 1</b> Test 1
          </p>
          <p>
          <b>1. Test 1</b> Test 1
          </p>
          <p>
            <b>1. Test 1</b> Test 1
          </p>
        </div>
      </>
    );
  
    return (
      <section className="Parallax">
        <div
          className="Parallax__background"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <div
          className="Parallax__background-triangles"
          style={{ transform: `translateY(${offsetY * -1}px)` }}
        />
        <div className="Parallax__content">{renderContent()}</div>
      </section>
    );
  }
  
  export default About;
