import React, { Component } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Intro from "../../Components/Intro/Intro";
import OurGames from "../../Components/OurGames/OurGames";
import WeInNumbers from "../../Components/WeInNumbers/WeInNumbers";
import SectionTeam from "../../Components/SectionTeam/SectionTeam";
import RoadMap from "../../Components/RoadMap/RoadMap";
import News from "../../Components/NewsBlock/News";
import Footer from "../../Components/Footer/Footer";

import anime from "animejs";

import ScrollBtn from "../../Components/ScrollBtn/ScrollBtn";

class Home extends Component {
     render() {
          document.addEventListener("DOMContentLoaded", () => {
               const ourGames = document.getElementById("navbar-our-games");
               const team = document.getElementById("navbar-team");

               const menu = document.querySelector('.navbar__inner .menu');
               const lines = document.querySelectorAll('.burger-menu .line');

               const ourGamesTop = document.getElementById("our-games").getBoundingClientRect().top;
               const teamTop = document.getElementById("team").getBoundingClientRect().top - 120;

               const scrollElement =
                    window.document.scrollingElement ||
                    window.document.body ||
                    window.document.documentElement;

               ourGames.onclick = (e) => {

                    e.preventDefault();

                    anime({
                         targets: scrollElement,
                         scrollTop: ourGamesTop,
                         duration: 500,
                         easing: "easeInOutQuad",
                    });

                    menu.classList.toggle('active');
                    lines.forEach(i => {
                         i.classList.toggle('active');
                    })

               };

               team.onclick = (e) => {
                    e.preventDefault();
                    anime({
                         targets: scrollElement,
                         scrollTop: teamTop,
                         duration: 700,
                         easing: "easeInOutQuad",
                    });

                    menu.classList.toggle('active');
                    lines.forEach(i => {
                         i.classList.toggle('active');
                    })
               };

               setTimeout(() => {
                    anime({
                         targets: ".navbar__inner ul li",
                         opacity: [0, 1],
                         duration: 3000,
                         delay: (el, i) => {
                              return i * 100;
                         },
                         translateX: [-10, 0],
                    });
               }, 800);

               anime({
                    targets: "#navbar-logo",
                    opacity: [0, 1],
                    duration: 500,
                    delay: 1000,
                    top: ["60%", "50%"],
                    easing: "easeOutExpo",
               });
          });

          return (
               <>
                    <Navbar />
                    <Intro />
                    <OurGames />
                    <WeInNumbers />
                    <SectionTeam />
                    <RoadMap />
                    <News />
                    <ScrollBtn />
                    <Footer />
               </>
          );
     }
}

export default Home;
