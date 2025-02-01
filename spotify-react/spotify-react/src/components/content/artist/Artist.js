import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay} from '@fortawesome/free-solid-svg-icons'

export default function Artist({object}) {
    return(
        <div className="card artist">
            <a href={object.link ? object.link : ""} rel="next">
                <div className="artist__visual">
                    <img src={object.urlImg} />
                    <div className="player"><FontAwesomeIcon icon={faPlay}/></div>
                </div>
                <div>
                    <h2>{object.name}</h2>
                    <p>{object.genre}</p>
                </div>
            </a>
        </div>
    )
}