const date = new Date()
let hour = date.getHours()
let saudacao

if(hour < 12) {
    saudacao = "Bom dia"
} 

if(hour >= 12 && hour < 19) {
    saudacao = "Boa tarde"
}

if(hour >= 18) {
    saudacao = "Boa noite"
}

const saudacaoPlace = document.querySelector(".saudacao-change-by-time")
saudacaoPlace.innerHTML = saudacao