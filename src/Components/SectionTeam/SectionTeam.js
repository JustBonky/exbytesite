import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import { faLinkedinIn, faTwitter, faVk } from "@fortawesome/free-brands-svg-icons";

import gsap, { Power3 } from "gsap";

import iskander_karmishev from "../../assets/team/iscander_karmyshev.jpg";
import TestImage from "../../assets/team/logo_exbyte-studios.jpg";
import sergo_midou from "../../assets/team/sergo_midou.jpg";
import dmitriy_stovpets from '../../assets/team/dmitriy_stovpets.jpg';
import alexander_paduro from '../../assets/team/alexander_paduro.jpg';
import vladimir_lim from '../../assets/team/vladimir_lim.jpg';
import dmitriy_balamozhnov from '../../assets/team/dmitriy_balamozhnov.jpg';

import "./sectionTeam.scss";
import "./media-team.scss";

class SectionTeam extends Component {
    render() {
        document.addEventListener("DOMContentLoaded", () => {

            gsap.fromTo('.logo-wrap h2', {
                opacity: 0,
                x: -50,
            }, {
                scrollTrigger: {
                    trigger: '.team',
                    start: 'top 75%',
                    end: 'bottom 75%',
                    // markers: true,
                },
                opacity: 1,
                x: 0,
            })

            let firstBlocks = [
                document.querySelectorAll('.team-grid__block')[0],
                document.querySelectorAll('.team-grid__block')[1],
                document.querySelectorAll('.team-grid__block')[2],
                document.querySelectorAll('.team-grid__block')[3],
            ];

            let secondBlocks = [
                document.querySelectorAll('.team-grid__block')[4],
                document.querySelectorAll('.team-grid__block')[5],
                document.querySelectorAll('.team-grid__block')[6],
                document.querySelectorAll('.team-grid__block')[7],
            ];

            let thirdBlocks = [
                document.querySelectorAll('.team-grid__block')[8],
                document.querySelectorAll('.team-grid__block')[9],
                document.querySelectorAll('.team-grid__block')[10]
            ];

            let blocks = [
                firstBlocks,
                secondBlocks,
                thirdBlocks
            ];

            gsap.to(blocks, {

                scrollTrigger: {
                    trigger: ".team-grid",
                    start: "top 80%",
                    end: "bottom bottom",
                },
                opacity: 1,
                top: 0,
                stagger: 0.15,
                duration: 1,
                ease: Power3.easeOut,
            })
        });

        return (
            <>
                <section className="team" id="team">
                    <div className="container">
                        <div className="logo-wrap" id="team__title">
                            <h2 translate="team-title">Our Amazing Team</h2>
                        </div>
                        <div className="team-grid">


                            {/* 1 */}
                            <div className="team-grid__block block--1">
                                <div className="photo">
                                    <img src={TestImage} alt="img-1" />
                                </div>
                                <div className="text-info">
                                    <div className="name">
                                        <h3 className="first-name" translate="nikita">Nikita</h3>
                                        <h3 className="last-name" translate="vereshchagin">Vereshchagin</h3>
                                    </div>
                                    <span translate="ceo-3d-art">CEO, 3D Artist</span>
                                </div>
                                <div className="links">
                                    <a href="https://vk.com/blender222" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faVk} />
                                    </a>
                                    <a href="https://vk.com/feed" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                    <a href="mailto:bonfromexbyte@gmail.com" rel="noreferrer">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="team-grid__block block--2">
                                <div className="photo">
                                    <img src={TestImage} alt="img-1" />
                                </div>

                                <div className="text-info">
                                    <div className="name">
                                        <h3 className="first-name" translate="egor">Egor</h3>
                                        <h3 className="last-name" translate="sambulov">Sambulov</h3>
                                    </div>
                                    <span translate="3d-art">3D Artist</span>
                                </div>

                                <div className="links">
                                    <a href="https://vk.com/sageva" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faVk} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/yegor-sambulov-aa0082204/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className="team-grid__block block--3">
                                <div className="photo">
                                    <img src={TestImage} alt="img-1" />
                                </div>
                                <div className="text-info">
                                    <div className="name">
                                        <h3 className="first-name" translate="alexander">Alexander</h3>
                                        <h3 className="last-name" translate="abakumov">Abakumov</h3>
                                    </div>
                                    <span translate="ceo-3d-art">CEO, 3D Artist</span>
                                </div>
                                <div className="links">
                                    <a href="https://vk.com/solitdude" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faVk} />
                                    </a>
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </div>
                            </div>

                            {/* 4 */}
                            <div className="team-grid__block block--4">
                                <div className="photo">
                                    <img src={alexander_paduro} alt="img-1" />
                                </div>
                                <div className="text-info">
                                    <div className="name">
                                        <h3 className="first-name" translate="alexander">Alexander</h3>
                                        <h3 className="last-name" translate="paduro">Paduro</h3>
                                    </div>
                                    <span translate="programmer">Programmer</span>
                                </div>
                                <div className="links">
                                    <a href="https://vk.com/dubrovsky1905" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faVk} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/alex-paduro-0119b0203/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </div>

                            {/* 5 */}
                            <div className="team-grid__block block--5">
                                <div className="photo">
                                    <img src={iskander_karmishev} alt="img-1" />
                                </div>
                                <div className="text-info">
                                    <div className="name">
                                        <h3 className="first-name" translate="iskander">Iskander</h3>
                                        <h3 className="last-name" translate="karmishev">Karmishev</h3>
                                    </div>
                                    <span translate="programmer">Programmer</span>
                                </div>
                                <div className="links">
                                    <a href="https://vk.com/kymus_power" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faVk} />
                                    </a>
                                </div>
                            </div>

                            {/* 6 */}
                            <div className="team-grid__block block--6">
                                <div className="photo">
                                    <img src={TestImage} alt="img-1" />
                                </div>
                                <div className="text-info">
                                    <div className="name">
                                        <h3 className="first-name" translate="maxim">Maxim</h3>
                                        <h3 className="last-name" translate="mulenkov">Mulenkov</h3>
                                    </div>
                                    <span translate="screenwriter">Screenwriter</span>
                                </div>
                                <div className="links">
                                    <a href="https://vk.com/macstimi" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faVk} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/maxim-mulenkov-0ba51a203/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </div>

                            {/* 7 */}
                            <div className="team-grid__block block--7">
                                <div className="photo">
                                    <img src={TestImage} alt="img-1" />
                                </div>
                                <div className="text-info">
                                    <div className="name">
                                        <h3 className="first-name" translate="valeriy">Valeriy</h3>
                                        <h3 className="last-name" translate="vartumyan">Vartumyan</h3>
                                    </div>
                                    <span translate="programmer">Programmer</span>
                                </div>
                                <div className="links">
                                    <a href="https://vk.com/ruliandeo" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faVk} />
                                    </a>
                                </div>
                            </div>

                            {/* 8 */}
                            <div className="team-grid__block block--8">
                                <div className="photo">
                                    <img src={sergo_midou} alt="img-1" />
                                </div>
                                <div className="text-info">
                                    <div className="name">
                                        <h3 className="first-name" translate="sergo">Sergo</h3>
                                        <h3 className="last-name" translate="avtuhov">Avtuhov</h3>
                                    </div>
                                    <span translate="screenwriter">Screenwriter</span>
                                </div>
                                <div className="links">
                                    <a href="https://vk.com/cc_ybludok_iz_frankfurta" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faVk} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/sergo-avtukhov-ba504a203/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </div>

                            {/* 9 */}
                            <div className="team-grid__block block--9">
                                <div className="photo">
                                    <img src={dmitriy_stovpets} alt="img-1" />
                                </div>

                                <div className="text-info">
                                    <div className="name">
                                        <h3 className="first-name" translate="dmitriy">Dmitriy</h3>
                                        <h3 className="last-name" translate="stovpets">Stovpets</h3>
                                    </div>
                                    <span translate="ui-designer">UI/UX designer</span>
                                </div>
                                <div className="links">
                                    <a href="https://vk.com/sdogman" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faVk} />
                                    </a>
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </div>

                            {/* 10 */}
                            <div className="team-grid__block block--10">
                                <div className="photo">
                                    <img src={vladimir_lim} alt="img-1" />
                                </div>
                                <div className="text-info">
                                    <div className="name">
                                        <h3 className="first-name" translate="vladimir">Vladimir</h3>
                                        <h3 className="last-name" translate="lim">Lim</h3>
                                    </div>
                                    <span translate="ui-designer">UI/UX designer</span>
                                </div>
                                <div className="links">
                                    <a href="https://vk.com/takedo_neet" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faVk} />
                                    </a>
                                    <a href="https://twitter.com/kek_limnalim" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/vladimir-lim-7616b7203/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </div>

                            {/* 11 */}
                            <div className="team-grid__block block--11">
                                <div className="photo">
                                    <img src={dmitriy_balamozhnov} alt="img-1" />
                                </div>
                                <div className="text-info">
                                    <div className="name">
                                        <h3 className="first-name" translate="dmitriy">Dmitriy</h3>
                                        <h3 className="last-name" translate="balamozhnov">Balamozhnov</h3>
                                    </div>
                                    <span translate="web-dev">Web developer</span>
                                </div>
                                <div className="links">
                                    <a href="https://twitter.com/te1m0z" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="/" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default SectionTeam;
