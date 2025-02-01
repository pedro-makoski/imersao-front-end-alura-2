import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay} from '@fortawesome/free-solid-svg-icons'


export default function Playlist({object}) {
    let imagem = require(`./playlist-imgs/${object.img}`)
    if(!imagem) {
        return null 
    }

    return(
        <div className="card" style={{backgroundColor:object.color}}>
            <a href={object.link ? object.link : ""} rel="next">
                <div className="title">
                    <h2>{object.name}</h2>
                </div>
                <div className="imagem__place"><img src={imagem} /></div>
                <div className="player"><FontAwesomeIcon icon={faPlay}/></div>
            </a>
        </div>
    )
}