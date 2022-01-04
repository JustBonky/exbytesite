import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faLinkedinIn,
    faVk,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/fontawesome-free-regular";

import "./footer.scss";
import './media-footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="container">
                        <div className="footer__inner">

                            <main className="footer__content">

                                <nav className="studio">
                                    <h2>STUDIO</h2>
                                    <a href="/">Privacy</a>
                                    <a href="/">Terms</a>
                                    <a href="/">Support</a>
                                </nav>

                                <nav className="social">
                                    <h2>Social</h2>
                                    <div className="links">
                                        <a href="/">
                                            <FontAwesomeIcon icon={faVk} />
                                        </a>
                                        <a href="/">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                        <a href="/">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </div>
                                </nav>

                                <div className="info">
                                    <h2>Partner</h2>
                                    <h3>For potecial investors</h3>
                                </div>

                                <div className="change-lang">
                                    <div className="change-lang__text">
                                        <h2 translate="language-text">Change language:</h2>
                                    </div>
                                    <div className="change-lang__items">
                                        <div className="lang ru" translate="language">RU</div>
                                    </div>
                                </div>
                            </main>

                            <div className="copyright">
                                <h4>
                                    <FontAwesomeIcon icon={faCopyright} />2021 ExByte Studios - All Rights Reserved
                                </h4>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}
