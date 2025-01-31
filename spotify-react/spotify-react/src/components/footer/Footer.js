import React, { useEffect } from "react";

import './footer.css'


function goneFooter(e) {
  const footer = document.querySelector("footer")
  if(!e.target.closest("footer")) {
    footer.classList.add("gone")
  } 
}


export default function Footer() {
    useEffect(() => {
        document.addEventListener("click", goneFooter)

        return () => {
            document.removeEventListener("click", goneFooter)
        }
    }, [])

    return (
        <footer>
            <div>
                <h1>Testar o Premium de graça</h1>
                <p>Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>
            <a href="" rel="next" className="footer__button"><span>Inscreva-se gratis</span></a>
        </footer>
    )
}