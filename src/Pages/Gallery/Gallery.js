import React, { Component } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';
import GridGallery from "../../Components/grid-gallery/gallery";
// component

export default class Gallery extends Component {
  render() {
    document.addEventListener("DOMContentLoaded", () => {
      const ourGames = document.getElementById("navbar-our-games"); //кнопка our-games
      const team = document.getElementById("navbar-team"); // кнопка team

      ourGames.href = "/";
      team.href = "/";

      const li__s = document.querySelectorAll('.navbar__inner ul li');

      for (let i = 0; i < li__s.length; i++) {
        li__s[i].style.opacity = 1;
      }
      // console.log(li__s)
    });

    return (
      <>
        <Navbar />
        <GridGallery />
        <Footer />
      </>
    );
  }
}
