import React, { useEffect, useRef, useState } from "react";

import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faSearch, faPlus, faBook, faGlobe, faBars} from '@fortawesome/free-solid-svg-icons'
import {handleElements} from './hamburguerControl.js'

import logoSpotify from '../assets/icons/logo-spotify.png'

export default function SideBar() {
    const menu = useRef(null)
    const hamburguer = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const standardIconHamburguer = <span><FontAwesomeIcon icon={faBars} style={{pointerEvents: "none"}}/></span>
    const [hamburguerAppereance, setHamburguerAppereance] = useState(standardIconHamburguer)

    useEffect(handleElements(menu, hamburguer, isOpen, setIsOpen, setHamburguerAppereance, standardIconHamburguer), [isOpen, setIsOpen])

    return (
        <>
            <button className="hamburguer" ref={hamburguer}>
                {hamburguerAppereance}
            </button>
            <div className="sidebar" ref={menu}>
                <nav className="sidebar__navigation">
                    <div>
                        <a href="">
                            <img src={logoSpotify} alt="logo do Spotify" />
                        </a>
                    </div>
                    <ul>
                        <li><a href="" rel="next">
                            <FontAwesomeIcon icon={faHome} className="fa"/>
                            <span>Inicio</span>
                        </a></li>
                        <li><a href="" rel="next">
                            <FontAwesomeIcon icon={faSearch} className="fa"/>
                            <span>Buscar</span>
                        </a></li>
                    </ul>
                </nav>
                <div className="sidebar__navigation biblioteca">
                    <div className="biblioteca__detalhes">
                        <div className="biblioteca__detalhes__icon">
                            <FontAwesomeIcon icon={faBook} />
                            <h1>Sua biblioteca</h1>
                        </div>
                        <button id="addlibrary"><FontAwesomeIcon icon={faPlus} className="fa"/></button>
                    </div>
                    <section className="primeira-playlist">
                        <div>
                            <h2>Crie sua primeira playlist</h2>
                            <p>É fácil, vamos te ajudar</p>
                        </div>
                        <a href="" className="create-playlist" rel="next"><span>Criar playlist</span></a>
                    </section>
                    <section className="primeiro-podcast">
                        <div>
                            <h2>Crie sua primeiro podcast</h2>
                            <p>É fácil, vamos te ajudar</p>
                        </div>
                        <a href="" className="create-playlist" rel="next"><span>Criar podcast</span></a>
                    </section>
                    <div className="configs">
                        <a href="" className="cookies" rel="next">Cookies</a>
                        <button className="languages">
                            <FontAwesomeIcon icon={faGlobe} className="fa"/>
                            <span>Português do Brasil</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}