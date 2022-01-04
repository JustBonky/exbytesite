import React, { Component } from "react";

import { gsap, Circ } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// .scss
import "./weInNumbers.scss";
import './we-in-numbers.scss';

export default class WeInNumbers extends Component {
    render() {

        document.addEventListener('DOMContentLoaded', numbers);

        function numbers() {

            gsap.registerPlugin(ScrollTrigger);

            gsap.set(".numbers__title, .numbers-block", {
                opacity: 0,
                y: 30,
                border: '1px solid transparent'
            });

            gsap.to(".numbers__title, .numbers-block", {

                scrollTrigger: {
                    trigger: "#we-in-numbers",
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => {

                        function outNum(num, elem, time, step) {
                            let el = document.getElementById(elem);
                            let n = 0;
                            let t = Math.round(time / (num / step));

                            let interval = setInterval(() => {
                                n = n + step;
                                if (n === num) {
                                    clearInterval(interval);
                                }
                                el.innerHTML = n;
                            }, t);
                        }

                        outNum(13, "second-block-number", 1300, 1);
                        outNum(3, "third-block-number", 800, 1);
                    },
                    once: true,
                },
                opacity: 1,
                y: 0,
                borderRight: '1px solid #fff',
                stagger: 0.2,
                ease: Circ.easeOut,
                onStart: () => {

                    gsap.to(".numbers__title", {
                        borderLeft: '1px solid #fff'
                    });

                    if (window.innerWidth <= 768) {

                        gsap.to("#first-number-block", {
                            borderLeft: '1px solid #fff'
                        });
                    }
                }
            }
            );
        }
        return (
            <>
                <section className="we-in-numbers" id="we-in-numbers">
                    <div className="container">
                        <div className="we-in-numbers__inner">

                            <div className="numbers__title">
                                <h1 translate="we-in-numbers-title">EXBYTE STUDIOS IN NUMBERS</h1>
                            </div>

                            <div className="numbers-wrap">

                                <div className="numbers-block" id="first-number-block">
                                    <h1 id="second-block-number">0</h1 >
                                    <h4 translate="numbers-developers">developers</h4>
                                </div>

                                <div className="numbers-block">
                                    <h1 id="third-block-number">0</h1>
                                    <h4 translate="numbers-projects">projects</h4>
                                </div>

                                <div className="numbers-block">
                                    <h1>2020</h1>
                                    <h4 translate="numbers-foundation">year of foundation</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
