import React from "react";
import '../reset.css'
import './Header.css';


import smallLeft from '../assets/icons/small-left.png'
import smallRight from '../assets/icons/small-right.png'
import lupaImg from '../assets/icons/search.png'


export default function Header() {
    return (
        <section className="search-bar">
            <nav>
                <div className="search-bar__navigation-and-search">
                    <div className="navigation">
                        <button className="arrow-left"><img src={smallLeft} alt="Voltar página" /></button>
                        <button className="arrow-left"><img src={smallRight} alt="Próxima página" /></button>
                    </div>
                    <div className="nav__search">
                        <img src={lupaImg} alt="" />
                        <input type="text" id="search-input" name="search-input" maxLength="800" placeholder="O que você quer ouvir?" />
                    </div>
                </div>
                <div className="nav__login">
                    <a href="" className="subscribe">Inscreva-se</a>
                    <a href="" className="login">Entrar</a>
                </div>
            </nav>
        </section>
    )
}