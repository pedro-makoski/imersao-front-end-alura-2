import React, { useEffect, useState } from 'react'
import Playlist from './playlist/Playlist'
import './content.css'

function getDataSaudation() {
    const date = new Date()
    const hour = date.getHours()

    if(hour <= 12){
        return "Bom dia"
    } else if(hour < 18) {
        return "Boa tarde"
    } else {
        return "Boa noite"
    }
}

function bringJSON(url, setFunc, setError) {
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            setFunc(result) 
            setError(null)
        })
        .catch(() => setError("Ops aconteceu algum erro"))
}

function Display({Element, url}) {
    const [elements, setElements] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        bringJSON(url, setElements, setError)
    }, [])

    if(error) {
        return (
            <p style={{margin: "auto"}}>Ops, Aconteceu algum erro</p>
        )
    }

    return (
        <>
            {elements.map((element) => <Element object={element} key={element.id}/>)}
        </>
    )
}

export default function Content() {
    let saudation = getDataSaudation()

    return(
        <section className="content">
            <div className="saudacao">
                <h1>{saudation}</h1>
                <p>Navegar por todas as seções</p>
            </div>
            <div className="cards artists hidden" id="artists">
            </div>
            <div className="cards" id="playlists">
                <Display Element={Playlist} url="http://localhost:8000/playlists"/>
            </div>
        </section>
    )
}