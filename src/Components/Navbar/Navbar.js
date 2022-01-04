import React, { Component } from "react";
import gsap, { Circ } from "gsap";
import logo from "../../assets/logotype.png";

import "./navbar.scss";
import "./navbar-media.scss";
export default class Navbar extends Component {
    render() {
        document.addEventListener("DOMContentLoaded", function () {
            gsap.to(".navbar__inner", {
                animationTimingFunction: () => {
                    document
                        .querySelector(".navbar__inner")
                        .classList.add("stretch-line");
                },
                delay: 0.5,
                ease: Circ.easeOut,
            });

            const burger = document.querySelector('.burger-menu input');
            const lines = document.querySelectorAll('.burger-menu .line');

            burger.onclick = () => {

                document.querySelector('.navbar__inner .menu').classList.toggle('active');

                lines.forEach(i => {
                    i.classList.toggle('active');
                })
            }
        });

        return (
            <>
                <section className="navbar" id="navbar">
                    <div className="container">
                        <div className="navbar__inner">

                            <div className="logo-wrap">
                                <img src={logo} alt="logo" id="navbar-logo" />
                            </div>

                            <ul className="menu">
                                <li>
                                    <a href="/" id="navbar-home" translate="home">Home</a>
                                </li>
                                <li>
                                    <a href="/games" id="navbar-our-games" translate="our-games">Our Games</a>
                                </li>
                                <li>
                                    <a href="/team" id="navbar-team" translate="team">Team</a>
                                </li>
                                <li>
                                    <a href="/careers" id="navbar__careers" translate="careers">Careers</a>
                                </li>
                                <li>
                                    <a href="/gallery" id="navbar__gallery" translate="gallery">Gallery</a>
                                </li>
                            </ul>
                            <div className="burger-menu">
                                <input type="checkbox" id="burger-box" />
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
