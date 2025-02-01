import React, { useEffect, useState, useRef } from 'react'
import Playlist from './playlist/Playlist'
import Artist from './artist/Artist'
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
    }, [url])

    if(error) {
        return (
            <p style={{margin: "auto"}}>Ops, Aconteceu algum erro</p>
        )
    }

    if(elements.length === 0) {
        return (
            <p style={{margin: "auto"}}>Nada para ver aqui</p>
        )
    } 

    return (
        <>
            {elements.map((element) => element ? <Element object={element} key={element.id}/> : "")}
        </>
    )
}

export default function Content({getInputFunc}) 
{
    const [artists, playlists] = [useRef(null), useRef(null)]

    let saudation = getDataSaudation()
    let [input, setInput] = useState('')
    useEffect(() => {
        const newInput = getInputFunc()
        setInput(newInput)
    })

    return(
        <section className="content">
            <div className="saudacao">
                <h1>{saudation}</h1>
                <p>Navegar por todas as seções</p>
            </div>
            <div className='results'>
                <div className="cards" id="playlists" ref={playlists}>
                    <h2>Playlists</h2>
                    <div>
                        <Display Element={Playlist} url={`http://localhost:8000/playlists?name_like=${input}`}/>
                    </div>
                </div>
                <div className="cards artists" id="artists" ref={artists}>
                    <h2>Artistas</h2>
                    <div>
                        <Display Element={Artist} url={`http://localhost:8000/artists?name_like=${input}`}/>
                    </div>
                </div>
            </div>
        </section>
    )
}