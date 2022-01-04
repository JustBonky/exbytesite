import React, { Component } from "react";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// .scss
import "./roadMap.scss";
import './media-roadmap.scss';

export default class RoadMap extends Component {
    render() {
        document.addEventListener("DOMContentLoaded", function () {

            gsap.set('.roadmap-block h2, .roadmap-block h4, .roadmap-block span', {
                opacity: 0,
                x: -35,
            });

            gsap.registerPlugin(ScrollTrigger);

            gsap.to('.roadmap-block h2, .roadmap-block h4, .roadmap-block span', {
                scrollTrigger: {
                    trigger: "#roadmap",
                    start: "top 75%",
                    end: "bottom 75%",
                },
                opacity: 1,
                x: 0,
                stagger: 0.175,
            });

            gsap.to('.roadmap__line', {
                scrollTrigger: {
                    trigger: "#roadmap",
                    start: "top 75%",
                    end: "bottom center",
                },
                duration: 1,
                width: '100%',
                stagger: 1,
                ease: Power1.easeInOut,
                onComplete: () => {
                    document.querySelectorAll('.roadmap__line')[3].classList.add('active');
                }
            });

        });

        return (
            <>
                <section className="roadmap" id="roadmap">
                    <div className="container">
                        <div className="roadmap__track">

                            <div className="roadmap-block roadmap__block-1">
                                <h4>Foundation of the Exbyte Studios</h4>
                                <span>IV quarter of 2020</span>

                                <div className="roadmap__line"></div>
                            </div>

                            <div className="roadmap-block roadmap__block-2">
                                <h2>First mobile game release</h2>
                                <h4>Casual game for Android and ios</h4>
                                <span>II quarter of 2021</span>

                                <div className="roadmap__line"></div>
                            </div>

                            <div className="roadmap-block roadmap__block-3">
                                <h2>Second mobile game release</h2>
                                <h4>Casual game for Android and ios</h4>
                                <div className="roadmap__line"></div>
                                <span>III quarter of 2021</span>
                            </div>

                            <div className="roadmap-block roadmap__block-4">
                                <h2>Alpha test of the game on PC</h2>
                                <h4>Large-scale project for PC</h4>
                                <div className="roadmap__line"></div>
                                <span>IV quarter of 2021</span>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
