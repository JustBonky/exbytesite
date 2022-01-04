import React, { Component } from "react";
import VanillaTilt from 'vanilla-tilt';
import { gsap } from 'gsap';
import firstImg from "../../assets/news/discord_bg.png";
import secondImg from "../../assets/news/1.jpg";
import thirdImg from "../../assets/gallery/4.jpg";


import "./news.scss";
import './media-news.scss';

export default class News extends Component {
    render() {

        document.addEventListener('DOMContentLoaded', function () {

            const card = [
                document.getElementById('news-block--1'),
                document.getElementById('news-block--2'),
                document.getElementById('news-block--3'),
            ];

            VanillaTilt.init(card, {
                max: 4,
                speed: 300,
                transition: 500,
                scale: 1.06,
            })

            gsap.fromTo(card, {
                opacity: 0,
                y: 30,
            }, {
                scrollTrigger: {
                    trigger: '.news-sec',
                    start: 'top 75%',
                    end: 'bottom 75%',
                },
                stagger: 0.24,
                y: 0,
                opacity: 1,
            })

        });


        return (
            <>
                <div className="news-sec" id="news-sec">
                    <div className="container">

                        <div className="news-sec__block" id="news-block--1">
                            <a className="block__content" href="https://discord.gg/WNbcFv7QEz" target="_blank" rel="noreferrer">
                                <div className="block-preview">
                                    <img src={firstImg} alt="pic" />
                                </div>
                                <h2 className="title">We have a Discord channel now!</h2>
                                <div className="block-description">
                                    <h2>
                                        Join us for future updates and announcements.
                                    </h2>
                                </div>
                            </a>
                        </div>

                        <div className="news-sec__block" id="news-block--2">
                            <a className="block__content" href="https://exbytestudios.itch.io/underwater" target="_blank" rel="noreferrer">
                                <div className="block-preview">
                                    <img src={secondImg} alt="pic" />
                                </div>
                                <h2 className="title"></h2>
                                <div className="block-description">
                                    <h2>Rate us on itch.io!</h2>
                                </div>
                            </a>
                        </div>

                        <div className="news-sec__block" id="news-block--3">
                            <div className="block__content">
                                <div className="block-preview">
                                    <img src={thirdImg} alt="pic" />
                                </div>
                                <h2 className="title">New's Title!</h2>
                                <div className="block-description">
                                    <h2>
                                    Join us for future updates and announcements.
                                    </h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}
