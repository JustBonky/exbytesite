import React, { Component } from "react";
import anime from "animejs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';

// images
import img001 from "../../assets/gallery/1.jpg";
import img002 from "../../assets/gallery/2.jpg";
import img003 from "../../assets/gallery/3.jpg";
import img004 from "../../assets/gallery/4.jpg";
import img005 from "../../assets/gallery/5.jpg";
import img006 from "../../assets/gallery/6.jpg";
import img007 from "../../assets/gallery/7.jpg";
import img008 from "../../assets/gallery/8.jpg";
import img009 from "../../assets/gallery/9.jpg";
import img010 from "../../assets/gallery/10.jpg";
import img011 from "../../assets/gallery/11.jpg";
import img012 from '../../assets/gallery/12.jpg';


import "./gallery.scss";
import "./media-gallery.scss";

export default class gallery extends Component {
     render() {
          document.addEventListener("DOMContentLoaded", () => {
               // const h5 = document.getElementsByClassName("gal-card-sub");
               let cards = Array.from(document.getElementsByClassName("gallery-item"))

               let renders = Array.from(document.getElementsByClassName("gal-render"));
               let concepts = Array.from(document.getElementsByClassName("gal-concept"));
               let arts = Array.from(document.getElementsByClassName("gal-art"));

               const allBtn = document.getElementById("select--all");
               const rendersBtn = document.getElementById("select--renders");
               const conceptsBtn = document.getElementById("select--concept");
               const artsbtn = document.getElementById("select--arts");

               // Modal settings
               for (let i = 0; i < cards.length; i++) {

                    const modal = document.getElementById('modal-wrap');

                    cards[i].addEventListener('click', function (e) {

                         modal.classList.add('active');

                         let img = cards[i].querySelector('img').getAttribute('src');
                         let name = cards[i].querySelector('.gal-card-name').innerHTML;
                         let description = cards[i].querySelector('.gal-card-h5').innerHTML;
                         modal.querySelector('.modal-body__img img').setAttribute('src', `${img}`);

                         modal.querySelector('.modal-body__descr__title h1').innerHTML = name;
                         modal.querySelector('.modal-body__descr__descr h3').innerHTML = description;

                         document.onclick = (e) => {
                              if (e.target === modal) {
                                   modal.classList.remove('active');
                              }
                         }
                    });

                    let text = cards[i].querySelector('.gal-card-h5');
                    let author = cards[i].querySelector('.gal-card-h4');

                    if (text.clientHeight >= 34) {
                         author.style.bottom = '43px';
                    } else {
                         author.style.bottom = '30px';
                    }

                    console.dir(text)

                    document.getElementById('close-modal-btn').onclick = () => {
                         modal.classList.remove('active');
                    }

               }

               anime({
                    targets: cards,
                    opacity: 1,
                    duration: 300,
                    delay: function (el, d) {
                         return (d + 3) * 100;
                    }
               });

               allBtn.addEventListener("click", () => {

                    for (let i = 0; i < cards.length; i++) {
                         cards[i].style.display = "none";
                    }

                    anime({
                         targets: cards,
                         opacity: [0, 1],
                         duration: 500,
                         delay: function (el, d) {
                              return (d + 4) * 100;
                         },
                         begin: () => {
                              cards.forEach(i => {
                                   i.style.display = 'block';
                              })
                         }
                    });

                    allBtn.classList.remove("hide");
                    rendersBtn.classList.remove("selected");
                    conceptsBtn.classList.remove("selected");
                    artsbtn.classList.remove("selected");
               });

               rendersBtn.addEventListener("click", () => {

                    for (let i = 0; i < cards.length; i++) {
                         cards[i].style.display = "none";
                    }

                    anime({
                         targets: renders,
                         opacity: [0, 1],
                         duration: 500,
                         delay: function (el, d) {
                              return (d + 4) * 100;
                         },
                         begin: () => {
                              renders.forEach(i => {
                                   i.style.display = 'block';
                              })
                         }
                    });

                    // buttons
                    artsbtn.classList.remove("selected");
                    conceptsBtn.classList.remove("selected");
                    rendersBtn.classList.add("selected");
                    allBtn.classList.add("hide");
               });

               conceptsBtn.addEventListener("click", () => {

                    for (let i = 0; i < cards.length; i++) {
                         cards[i].style.display = "none";
                    }

                    anime({
                         targets: concepts,
                         opacity: [0, 1],
                         duration: 500,
                         delay: function (el, d) {
                              return (d + 4) * 100;
                         },
                         begin: () => {
                              concepts.forEach(i => {
                                   i.style.display = 'block';
                              })
                         }
                    });

                    artsbtn.classList.remove("selected");
                    conceptsBtn.classList.add("selected");
                    rendersBtn.classList.remove("selected");
                    allBtn.classList.add("hide");
               });

               artsbtn.addEventListener("click", () => {

                    for (let i = 0; i < cards.length; i++) {
                         cards[i].style.display = "none";
                    }

                    anime({
                         targets: arts,
                         opacity: [0, 1],
                         duration: 500,
                         delay: function (el, d) {
                              return (d + 4) * 100;
                         },
                         begin: () => {
                              arts.forEach(i => {
                                   i.style.display = 'block';
                              })
                         }
                    });

                    artsbtn.classList.add("selected");
                    conceptsBtn.classList.remove("selected");
                    rendersBtn.classList.remove("selected");
                    allBtn.classList.add("hide");
               });
          });

          return (
               <>
                    <section className="gallery-sec">
                         <div className="container">

                              <div className="header-gallery">
                                   <div className="header-gallery__title">
                                        <h1>Our Works</h1>
                                   </div>
                                   <div className="select-wrap">
                                        <span id="select--all">All</span>
                                        <span id="select--renders">
                                             Renders
                                        </span>
                                        <span id="select--concept">
                                             Concepts
                                        </span>
                                        <span id="select--arts">Arts</span>
                                   </div>
                              </div>

                              <div className="gallery-container">
                                   <div className="gallery" id="gallery">

                                        <div className="gallery-item gal-art">
                                             <h4 className="gal-card-h4">
                                                  Author: Dmitriy Stovpets
                                             </h4>
                                             <div className="gal-card-sub">
                                                  <h5 className="gal-card-h5">Main character of the game: "Hollow Knight"</h5>
                                             </div>
                                             <img
                                                  className="gallery-img"
                                                  src={img001}
                                                  alt="pic"
                                             />
                                             <h1 className="gal-card-name">Our Global Location</h1>
                                        </div>

                                        <div className="gallery-item gal-art">
                                             <h4 className="gal-card-h4">
                                                  Author: Dmitriy Stovpets
                                             </h4>
                                             <div className="gal-card-sub">
                                                  <h5 className="gal-card-h5">
                                                       Small and feared girl with fire tourch.
                                                  </h5>
                                             </div>
                                             <img
                                                  className="gallery-img"
                                                  src={img002}
                                                  alt="pic"
                                             />
                                             <h1 className="gal-card-name">Our Global Location</h1>
                                        </div>

                                        <div className="gallery-item gal-art">
                                             <h4 className="gal-card-h4">
                                                  Author: Dmitriy Stovpets
                                             </h4>
                                             <div className="gal-card-sub">
                                                  <h5 className="gal-card-h5">
                                                       Background for game created on GameJam
                                                  </h5>
                                             </div>
                                             <img
                                                  className="gallery-img"
                                                  src={img003}
                                                  alt="pic"
                                             />
                                             <h1 className="gal-card-name">Our Global Location</h1>
                                        </div>

                                        <div className="gallery-item gal-art">
                                             <h4 className="gal-card-h4">
                                                  Author: Dmitriy Stovpets
                                             </h4>
                                             <div className="gal-card-sub">
                                                  <h5 className="gal-card-h5">
                                                       Just a dump
                                                  </h5>
                                             </div>
                                             <img
                                                  className="gallery-img"
                                                  src={img004}
                                                  alt="pic"
                                             />
                                             <h1 className="gal-card-name">Our Global Location</h1>
                                        </div>

                                        <div className="gallery-item gal-art">
                                             <h4 className="gal-card-h4">
                                                  Author: Dmitriy Stovpets
                                             </h4>
                                             <div className="gal-card-sub">
                                                  <h5 className="gal-card-h5">
                                                       Just a cactus
                                                  </h5>
                                             </div>
                                             <img
                                                  className="gallery-img"
                                                  src={img005}
                                                  alt="pic"
                                             />
                                             <h1 className="gal-card-name">Our Global Location</h1>
                                        </div>

                                        <div className="gallery-item gal-art">
                                             <h4 className="gal-card-h4">
                                                  Author: Dmitriy Stovpets
                                             </h4>
                                             <div className="gal-card-sub">
                                                  <h5 className="gal-card-h5">
                                                       Knight, created for practive on Gtodo engine.
                                                  </h5>
                                             </div>
                                             <img
                                                  className="gallery-img"
                                                  src={img006}
                                                  alt="pic"
                                             />
                                             <h1 className="gal-card-name">Our Global Location</h1>
                                        </div>

                                        <div className="gallery-item gal-art">
                                             <h4 className="gal-card-h4">
                                                  Author: Dmitriy Stovpets
                                             </h4>
                                             <div className="gal-card-sub">
                                                  <h5 className="gal-card-h5">
                                                       Metal axe
                                                  </h5>
                                             </div>
                                             <img
                                                  className="gallery-img"
                                                  src={img007}
                                                  alt="pic"
                                             />
                                             <h1 className="gal-card-name">Our Global Location</h1>
                                        </div>

                                        <div className="gallery-item gal-art">
                                             <h4 className="gal-card-h4">
                                                  Author: Dmitriy Stovpets
                                             </h4>
                                             <div className="gal-card-sub">
                                                  <h5 className="gal-card-h5">
                                                       Tree
                                                  </h5>
                                             </div>
                                             <img
                                                  className="gallery-img"
                                                  src={img008}
                                                  alt="pic"
                                             />
                                             <h1 className="gal-card-name">Our Global Location</h1>
                                        </div>

                                        <div className="gallery-item gal-art">
                                             <h4 className="gal-card-h4">
                                                  Author: Dmitriy Stovpets
                                             </h4>
                                             <div className="gal-card-sub">
                                                  <h5 className="gal-card-h5">
                                                       Drawing charcters practice
                                                  </h5>
                                             </div>
                                             <img
                                                  className="gallery-img"
                                                  src={img009}
                                                  alt="pic"
                                             />
                                             <h1 className="gal-card-name">Our Global Location</h1>
                                        </div>

                                        <div className="gallery-item gal-art">
                                             <h4 className="gal-card-h4">
                                                  Author: Dmitriy Stovpets
                                             </h4>
                                             <div className="gal-card-sub">
                                                  <h5 className="gal-card-h5">
                                                       Freddie Mercury
                                                  </h5>
                                             </div>
                                             <img
                                                  className="gallery-img"
                                                  src={img010}
                                                  alt="pic"
                                             />
                                             <h1 className="gal-card-name">Our Global Location</h1>
                                        </div>

                                        <div className="gallery-item gal-art">
                                             <h4 className="gal-card-h4">
                                                  Author: Dmitriy Stovpets
                                             </h4>
                                             <div className="gal-card-sub">
                                                  <h5 className="gal-card-h5">
                                                       Juliy - second main character of my previous game
                                                  </h5>
                                             </div>
                                             <img
                                                  className="gallery-img"
                                                  src={img011}
                                                  alt="pic"
                                             />
                                             <h1 className="gal-card-name">Our Global Location</h1>
                                        </div>

                                        <div className="gallery-item gal-render">
                                             <h4 className="gal-card-h4">
                                                  Author: Egor Sambulov
                                             </h4>
                                             <div className="gal-card-sub">
                                                  <h5 className="gal-card-h5">
                                                       In search of artifacts
                                                  </h5>
                                             </div>
                                             <img
                                                  className="gallery-img"
                                                  src={img012}
                                                  alt="pic"
                                             />
                                             <h1 className="gal-card-name">Our Global Location</h1>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </section>




                    <div className="modal-wrap" id="modal-wrap">
                         <div className="modal-body">
                              <div className="modal-body__img">
                                   <img alt="some" />
                              </div>
                              <div className="modal-body__descr">
                                   <div className="modal-body__descr__title">
                                        <h5>Title:</h5>
                                        <h1>etst</h1>
                                   </div>
                                   <div className="modal-body__descr__descr">
                                        <h5>Description:</h5>
                                        <h3>etst</h3>
                                   </div>
                              </div>
                              <FontAwesomeIcon icon={faTimes} id="close-modal-btn" />
                         </div>
                    </div>
               </>
          );
     }
}
