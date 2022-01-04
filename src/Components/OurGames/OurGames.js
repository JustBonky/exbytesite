import React, { Component } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import games_bg from '../../assets/our_games_bg.jpg';

// .scss
import "./ourGames.scss";
import "./media-games.scss";

export default class OurGames extends Component {
    render() {
        document.addEventListener("DOMContentLoaded", function () {

            gsap.registerPlugin(ScrollTrigger);

            // sets //
            gsap.set('.game-background', {
                opacity: 0.4,
                scale: 1,
            });
            gsap.set('.our-games__title', {
                opacity: 0,
                x: -50,
            });
            gsap.set('.our-games__card', {
                opacity: 0,
                y: 30,
            });


            // animations //

            gsap.to('.our-games__title', {
                scrollTrigger: {
                    trigger: '.our-games',
                    start: 'top 70%',
                    end: 'bottom bottom',
                },
                opacity: 1,
                x: 0,
            });

            gsap.to('.our-games__card', {
                scrollTrigger: {
                    trigger: '.our-games',
                    start: 'top 50%',
                    end: 'bottom bottom',
                },
                opacity: 1,
                y: 0,
            });

            gsap.to('.game-background', {
                scrollTrigger: {
                    trigger: '.game-background',
                    start: 'top 80%',
                    end: 'bottom bottom',

                },
                duration: 3,
                opacity: 1,
                scale: 1.1,
            });
            
        });

        return (
            <>
                <section className="our-games" id="our-games">
                    <div className="game-background">
                        <img src={games_bg} alt="games_bg" />
                    </div>

                    <div className="container" id="games-cont">

                        <div className="our-games__title">
                            <h1 translate="our-games-title">
                                Here is our
                                favourite games!
                            </h1>
                        </div>

                        <div className="our-games__content">

                            <div className="our-games__card" id="first-game__card"></div>

                            <div className="our-games__card" id="second-game__card"></div>

                            <div className="our-games__card" id="third-game__card"></div>

                        </div>

                    </div>
                </section>
            </>
        );
    }
}
