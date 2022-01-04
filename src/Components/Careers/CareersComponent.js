import React, { Component } from "react";
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap, Power3 } from "gsap";
import "./media-careers.scss";
import "./careers.scss";

export default class Careers extends Component {
    render() {

        document.addEventListener("DOMContentLoaded", () => {
            const ourGames = document.getElementById("navbar-our-games"); //кнопка our-games
            const team = document.getElementById("navbar-team"); // кнопка team

            ourGames.href = "/";
            team.href = "/";

            const li__s = document.querySelectorAll(".navbar__inner ul li");

            for (let i = 0; i < li__s.length; i++) {
                li__s[i].style.opacity = 1;
            }

            //buttons
            const allBtn = document.getElementById("all-careers");
            const manageBtn = document.getElementById("manage-careers");
            const marketBtn = document.getElementById("marketing-careers");
            const gameDesignBtn = document.getElementById("game-design-careers");
            const engineBtn = document.getElementById("engineeng-careers");
            const artBtn = document.getElementById("art-careers");



            let vacancies = document.querySelector('.careers-content__body').getElementsByTagName('li');
            let administrativeVacancies = document.querySelectorAll('#administr-work');
            let programmerVacancies = document.querySelectorAll('#programmer-work');
            let gameDesignVacancies = document.querySelectorAll('#design-work');


            let vacanciesArray = Array.from(vacancies);
            let arrayAdminVac = Array.from(administrativeVacancies);
            let arrayProgrammerVac = Array.from(programmerVacancies);
            let arrayDesignVac = Array.from(gameDesignVacancies);

            allBtn.addEventListener("click", () => {
                allBtn.classList.remove("hide");
                manageBtn.classList.remove("selected");
                marketBtn.classList.remove("selected");
                gameDesignBtn.classList.remove("selected");
                engineBtn.classList.remove("selected");
                artBtn.classList.remove("selected");


                vacanciesArray.forEach(i => {
                    i.style.display = 'block';
                });

                array.forEach(item => {
                    item.classList.remove('active');
                });
            });

            manageBtn.addEventListener("click", () => {

                allBtn.classList.add("hide");
                manageBtn.classList.add("selected");
                marketBtn.classList.remove("selected");
                gameDesignBtn.classList.remove("selected");
                engineBtn.classList.remove("selected");
                artBtn.classList.remove("selected");

                vacanciesArray.forEach(i => {
                    i.style.display = 'none';
                });

                arrayAdminVac.forEach(i => {
                    i.style.display = 'block';
                });

                array.forEach(item => {
                    item.classList.remove('active');
                });
            });

            marketBtn.addEventListener("click", () => {
                allBtn.classList.add("hide");
                manageBtn.classList.remove("selected");
                marketBtn.classList.add("selected");
                gameDesignBtn.classList.remove("selected");
                engineBtn.classList.remove("selected");
                artBtn.classList.remove("selected");

                vacanciesArray.forEach(i => {
                    i.style.display = 'none';
                });

                arrayProgrammerVac.forEach(i => {
                    i.style.display = 'block';
                });

                array.forEach(item => {
                    item.classList.remove('active');
                });
            });

            gameDesignBtn.addEventListener("click", () => {
                allBtn.classList.add("hide");
                manageBtn.classList.remove("selected");
                marketBtn.classList.remove("selected");
                gameDesignBtn.classList.add("selected");
                engineBtn.classList.remove("selected");
                artBtn.classList.remove("selected");

                vacanciesArray.forEach(i => {
                    i.style.display = 'none';
                });

                arrayDesignVac.forEach(i => {
                    i.style.display = 'block';
                });

                array.forEach(item => {
                    item.classList.remove('active');
                });
            });

            engineBtn.addEventListener("click", () => {
                allBtn.classList.add("hide");
                manageBtn.classList.remove("selected");
                marketBtn.classList.remove("selected");
                gameDesignBtn.classList.remove("selected");
                engineBtn.classList.add("selected");
                artBtn.classList.remove("selected");
            });

            artBtn.addEventListener("click", () => {
                allBtn.classList.add("hide");
                manageBtn.classList.remove("selected");
                marketBtn.classList.remove("selected");
                gameDesignBtn.classList.remove("selected");
                engineBtn.classList.remove("selected");
                artBtn.classList.add("selected");
            });



            let lis = document.querySelector('.careers-content__body').getElementsByTagName('li');
            let array = Array.from(lis);

            // li -s
            for (let i = 0; i < array.length; i++) {

                array[i].onclick = (e) => {

                    if (e.target.classList.contains('active')) {
                        array[i].classList.add('active');

                        if (window.innerWidth >= 480) {
                            array[i].querySelector('.content--right__open button').innerHTML = 'Expand';
                        }

                        let text = array[i].querySelector('.content--left p');
                        gsap.to(text, {
                            duration: 1,
                            opacity: 0,
                            ease: Power3.easeInOut
                        });

                    } else {

                        // + open li
                        array.forEach(item => {
                            item.classList.remove('active');

                            if (window.innerWidth >= 480) {
                                array[i].querySelector('.content--right__open button').innerHTML = 'Expand';
                            }

                            let text = item.querySelector('.content--left p');
                            gsap.to(text, {
                                duration: 1,
                                opacity: 0,
                                ease: Power3.easeInOut
                            });
                        });

                        if (window.innerWidth >= 480) {
                            array[i].querySelector('.content--right__open button').innerHTML = 'Hide';
                        }

                        let text = array[i].querySelector('.content--left p');
                        gsap.to(text, {
                            duration: 1,
                            opacity: 1,
                            ease: Power3.easeInOut
                        });
                    }

                    array[i].classList.toggle('active');
                }
            };
        });

        return (
            <>
                <div className="careers-sec" id="careers-sec">
                    <div className="container">
                        <div className="careers-content">
                            <div className="careers-content__header">
                                <div className="careers-title">
                                    <h1>Our vacancies</h1>
                                </div>
                                <div className="careers-settings">
                                    <span id="all-careers">All</span>
                                    <span id="manage-careers">
                                        Managment
                                             </span>
                                    <span id="marketing-careers">
                                        Marketing
                                             </span>
                                    <span id="game-design-careers">
                                        Game Design
                                             </span>
                                    <span id="engineeng-careers">
                                        Engineeng
                                             </span>
                                    <span id="art-careers">Art</span>
                                </div>
                            </div>

                            <ul className="careers-content__body">

                                <li id="administr-work">
                                    <div className="title-wrap">
                                        <h2>Administrative</h2>
                                    </div>
                                    <div className="content--left">
                                        <p>Come back later</p>
                                    </div>
                                    <div className="content--right">
                                        <div className="content--right__number">
                                            <span>0</span>
                                        </div>
                                        <div className="content--right__open">
                                            <button>Expand</button>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                </li>

                                <li id="administr-work">
                                    <div className="title-wrap">
                                        <h2>Managment</h2>
                                    </div>
                                    <div className="content--left">
                                        <p>Come back later</p>
                                    </div>
                                    <div className="content--right">
                                        <div className="content--right__number">
                                            <span>0</span>
                                        </div>
                                        <div className="content--right__open">
                                            <button>Expand</button>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                </li>

                                <li id="administr-work">
                                    <div className="title-wrap">
                                        <h2>Marketing</h2>
                                    </div>
                                    <div className="content--left">
                                        <p>Come back later</p>
                                    </div>
                                    <div className="content--right">
                                        <div className="content--right__number">
                                            <span>0</span>
                                        </div>
                                        <div className="content--right__open">
                                            <button>Expand</button>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                </li>

                                <li id="programmer-work">
                                    <div className="title-wrap">
                                        <h2>Programmer</h2>
                                    </div>
                                    <div className="content--left">
                                        <p>Come back later</p>
                                    </div>
                                    <div className="content--right">
                                        <div className="content--right__number">
                                            <span>0</span>
                                        </div>
                                        <div className="content--right__open">
                                            <button>Expand</button>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                </li>

                                <li id="programmer-work">
                                    <div className="title-wrap">
                                        <h2>Engineeing</h2>
                                    </div>
                                    <div className="content--left">
                                        <p>Come back later</p>
                                    </div>
                                    <div className="content--right">
                                        <div className="content--right__number">
                                            <span>0</span>
                                        </div>
                                        <div className="content--right__open">
                                            <button>Expand</button>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                </li>

                                <li id="programmer-work">
                                    <div className="title-wrap">
                                        <h2>Programmer</h2>
                                    </div>
                                    <div className="content--left">
                                        <p>Come back later</p>
                                    </div>
                                    <div className="content--right">
                                        <div className="content--right__number">
                                            <span>0</span>
                                        </div>
                                        <div className="content--right__open">
                                            <button>Expand</button>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                </li>

                                <li id="design-work">
                                    <div className="title-wrap">
                                        <h2>Game Design</h2>
                                    </div>
                                    <div className="content--left">
                                        <p>Come back later</p>
                                    </div>
                                    <div className="content--right">
                                        <div className="content--right__number">
                                            <span>0</span>
                                        </div>
                                        <div className="content--right__open">
                                            <button>Expand</button>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                </li>

                                <li id="design-work">
                                    <div className="title-wrap">
                                        <h2>Art Design</h2>
                                    </div>
                                    <div className="content--left">
                                        <p>Come back later</p>
                                    </div>
                                    <div className="content--right">
                                        <div className="content--right__number">
                                            <span>0</span>
                                        </div>
                                        <div className="content--right__open">
                                            <button>Expand</button>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
