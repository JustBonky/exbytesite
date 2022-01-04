import React, { Component } from "react";
import anime from "animejs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/fontawesome-free-solid";

import { gsap, Power3 } from 'gsap';

import "./intro.scss";
import "./intro-media.scss";

export default class Intro extends Component {
     render() {
          document.addEventListener("DOMContentLoaded", function () {

               gsap.fromTo('.intro__title h1 div', {
                    x: -40,
                    scaleX: 0.96,
                    opacity: 0,
               }, {
                    delay: 0.7,
                    x: 0,
                    opacity: 1,
                    scaleX: 1,
                    duration: 0.6,
                    stagger: 0.7,
                    ease: Power3.easeInOut,
                    onComplete: () => {

                         document.querySelectorAll('.intro__title h1 div span').forEach(i => {
                              i.classList.add('active');
                         });

                         changeTexts(0);
                    }
               })

               let stringText = [
                    'incredible',
                    'sumptuously',
                    'greatful'
               ];

               let adverbs = document.querySelector('.adverbs');

               function changeTexts(index) {

                    if (index < 3) {

                         adverbs.innerHTML = stringText[index];

                         gsap.fromTo(adverbs, {
                              x: -30,
                              // opacity: 0
                         }, {
                              x: 0,
                              opacity: 1,
                              duration: 1,
                              onComplete: () => {
                                   gsap.to(adverbs, {
                                        duration: 0.5,
                                        opacity: 0,
                                   })
                              }
                         })

                    } else if (index >= 3) {

                         index = 0;

                         adverbs.innerHTML = stringText[index];

                         gsap.fromTo(adverbs, {
                              x: -30,
                              // opacity: 0
                         }, {
                              x: 0,
                              opacity: 1,
                              duration: 1,
                              onComplete: () => {
                                   gsap.to(adverbs, {
                                        duration: 0.5,
                                        opacity: 0,
                                   })
                              }
                         })

                    }

                    setTimeout(() => {

                         changeTexts(index + 1);

                    }, 2500)
               };


               // кнопка
               anime({
                    targets: "#intro-icon-down",
                    translateY: [0, 20, 30],
                    easing: "easeInOutQuad",
                    opacity: [0, 0.5, 0],
                    delay: 700,
                    duration: 3000,
                    loop: true,
                    direction: "alternative",
               });

               const firstSecTop = document
                    .getElementById("our-games")
                    .getBoundingClientRect().top;
               const icon = document.getElementById("intro-icon-down");

               icon.addEventListener("click", function () {
                    const scrollElement =
                         window.document.scrollingElement ||
                         window.document.body ||
                         window.document.documentElement;

                    anime({
                         targets: scrollElement,
                         scrollTop: firstSecTop,
                         duration: 500,
                         easing: "easeInOutQuad",
                    });
               });
          });

          return (
               <>
                    <section className="intro" id="intro">
                         <div className="container">
                              <div className="intro__inner">
                                   <div className="intro__title">
                                        <h1>
                                             <div>
                                                  <span translate="create-intro">Create</span>
                                                  <span translate="create-intro">Create</span>
                                                  <span translate="create-intro">Create</span>
                                             </div>
                                             <p className="adverbs">first text</p>
                                        </h1>
                                   </div>
                                   <div className="right-anim">

                                   </div>
                              </div>
                         </div>
                         <FontAwesomeIcon
                              icon={faAngleDoubleDown}
                              id="intro-icon-down"
                         />
                    </section>
               </>
          );
     }
}
