import React, { Component } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CareersComponent from '../../Components/Careers/CareersComponent';

export default class Careers extends Component {
     render() {
          return (
               <>
                    <Navbar />
                    <CareersComponent />
                    <Footer />
               </>
          );
     }
}
