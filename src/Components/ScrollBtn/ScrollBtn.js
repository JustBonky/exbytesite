import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/fontawesome-free-solid";
import anime from "animejs";

import "./scrollBtn.scss";

export default class ScrollBtn extends Component {
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      const btn = document.getElementById("up-btn-wrapper");
      const scrollElement =
        window.document.scrollingElement ||
        window.document.body ||
        window.document.documentElement;

      window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      btn.addEventListener("click", function () {
        anime({
          targets: scrollElement,
          scrollTop: 0,
          duration: 500,
          easing: 'easeInOutQuad',
        });
      });
    });
    
    return (
      <>
        <div id="up-btn-wrapper">
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </>
    );
  }
}
