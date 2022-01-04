import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import Careers from "./Pages/Careers/Careers";
import NotFound from "./Pages/NotFound/NotFound";


import { Power3 } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// .scss
import "normalize.css";
import "./global.scss";
import "./fonts.scss";
import gsap from "gsap/gsap-core";

export default class App extends Component {
    render() {

        window.onload = () => {

            gsap.registerPlugin(ScrollToPlugin);

            let translateTemplate = {
                "en": {
                    'home': 'Home',
                    'our-games': 'Our Games',
                    'team': 'Team',
                    'careers': 'Careers',
                    'gallery': 'Gallery',
                    'create-intro': 'Create',
                    'our-games-title': 'Here is our favourite games!',
                    'we-in-numbers-title': 'EXBYTE STUDIOS IN NUMBERS',
                    'numbers-developers': 'developers',
                    'numbers-projects': 'projects',
                    'numbers-foundation': 'year of foundation',
                    'team-title': 'Our Amazing Team',

                    //careers
                    'ceo-3d-art': 'CEO, 3D Artist',
                    '3d-art': '3D Artist',
                    'programmer': 'Programmer',
                    'screenwriter': 'Screenwriter',
                    'ui-designer': 'UI/UX designer',
                    'web-dev': 'Web developer',


                    //names
                    'nikita': 'Nikita',
                    'vereshchagin': 'Vereshchagin',

                    'egor': 'Egor',
                    'sambulov': 'Sambulov',

                    'alexander': 'Alexander',
                    'abakumov': 'Abakumov',

                    'paduro': 'Paduro',

                    'iskander': 'Iskander',
                    'karmishev': 'Karmishev',
                
                    'maxim': 'Maxim',
                    'mulenkov': 'Mulenkov',

                    'valeriy': 'Valeriy',
                    'vartumyan': 'Vartumyan',


                    'sergo': 'Sergo',
                    'avtuhov': 'Avtuhov',

                    'dmitriy': 'Dmitriy',
                    'stovpets': 'Stovpets',

                    'vladimir': 'Vladimir',
                    'lim': 'Lim',

                    'balamozhnov': 'Balamozhnov',


                    'language': 'RU',
                    'language-text': 'Change language'
                },
                "ru": {
                    'home': 'Главная',
                    'our-games': 'Наши Игры',
                    'team': 'Команда',
                    'careers': 'Вакансии',
                    'gallery': 'Галерея',
                    'create-intro': 'Делай',
                    'our-games-title': 'Здесь наши игры!',
                    'we-in-numbers-title': 'EXBYTE STUDIOS В ЦИФРАХ',
                    'numbers-developers': 'разработчиков',
                    'numbers-projects': 'проекта',
                    'numbers-foundation': 'год основания',
                    'team-title': 'Наша Команда',

                    //careers
                    'ceo-3d-art': 'CEO, 3D Художник',
                    '3d-art': '3D Художник',
                    'programmer': 'Программист',
                    'screenwriter': 'Скрин Художник',
                    'ui-designer': 'UI/UX дизайнер',
                    'web-dev': 'Web разработчик',


                    //names
                    'nikita': 'Никита',
                    'vereshchagin': 'Верещагин',

                    'egor': 'Егор',
                    'sambulov': 'Самбулов',

                    'alexander': 'Александр',
                    'abakumov': 'Абакумов',

                    'paduro': 'Падуро',

                    'iskander': 'Искандер',
                    'karmishev': 'Кармышев',
                
                    'maxim': 'Максим',
                    'mulenkov': 'Муленков',

                    'valeriy': 'Валерий',
                    'vartumyan': 'Вартумян',


                    'sergo': 'Серго',
                    'avtuhov': 'Автухов',

                    'dmitriy': 'Дмитрий',
                    'stovpets': 'Стовпетс',

                    'vladimir': 'Владимир',
                    'lim': 'Лим',

                    'balamozhnov': 'Баламожнов',

                    'language': 'EN',
                    'language-text': 'Изменить язык'
                }
            };

            const changeLang = document.querySelector('.change-lang');
            const html = document.getElementsByTagName('html')[0];
            let elems = document.body.querySelectorAll("*[translate]");

            changeLang.onclick = function () {

                // set english
                if (html.getAttribute('lang') === 'ru') {

                    html.setAttribute('lang', 'en');

                    elems.forEach(i => {
                        let attributes = i.getAttribute('translate');
                        i.innerHTML = translateTemplate.en[attributes];
                    });

                } else if (html.getAttribute('lang') === 'en') { // set russian

                    html.setAttribute('lang', 'ru');

                    elems.forEach(i => {

                        let attributes = i.getAttribute('translate');
                        i.innerHTML = translateTemplate.ru[attributes];
                    });
                }

                gsap.to(window.window, {duration: 1.5, scrollTo: 0, ease: Power3.easeInOut });
            };
        }
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/careers" component={Careers} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </>
        );
    }
}
