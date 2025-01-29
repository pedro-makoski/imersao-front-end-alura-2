const MAX_WIDTH_HAMBURGUER = 1058

function openByHamburguer(menu, oldToNewList, classAppear, toggleElement, exitString) {
    toggleElement.classList.remove(oldToNewList[0])
    toggleElement.classList.add(oldToNewList[1])
    toggleElement.innerHTML = exitString

    menu.classList.add(classAppear)
}

function closeByHamburguer(menu, oldToNewList, classAppear, toggleElement) {
    toggleElement.classList.add(oldToNewList[0])
    toggleElement.classList.remove(oldToNewList[1])
    toggleElement.innerHTML = ""

    menu.classList.remove(classAppear)
}


function verificateIsPossibleOpen(menu, appearClass) {
    return !menu.classList.contains(appearClass)
}

function verificateIsPossibleClose(menu, appearClass) {
    return menu.classList.contains(appearClass) && window.innerWidth <= MAX_WIDTH_HAMBURGUER
} 

const menu = document.querySelector(".sidebar")
const hamburguer = document.querySelector(".hamburguer")
const hamburguerSpan = document.querySelector(".hamburguer span")
const OLD_TO_NEW_LIST_CLASS = ["fa-bars", "fa-x"]
const CLASS_APPEAR = "appear"
const EXIT_STRING = "X"

hamburguer.addEventListener("click", () => {
    if(verificateIsPossibleOpen(menu, CLASS_APPEAR)) {
        openByHamburguer(menu, OLD_TO_NEW_LIST_CLASS, CLASS_APPEAR, hamburguerSpan, EXIT_STRING)
    } else if(verificateIsPossibleClose(menu, CLASS_APPEAR)) {
        closeByHamburguer(menu, OLD_TO_NEW_LIST_CLASS, CLASS_APPEAR, hamburguerSpan)
    }
})

document.addEventListener("click", (e) => {
    if(!e.target.closest(".sidebar") && !e.target.closest(".hamburguer")){
        if(verificateIsPossibleClose(menu, CLASS_APPEAR)) {
            closeByHamburguer(menu, OLD_TO_NEW_LIST_CLASS, CLASS_APPEAR, hamburguerSpan)
        }
    }
})

window.addEventListener("resize", () => {
    if(verificateIsPossibleOpen(menu, CLASS_APPEAR)) {
        openByHamburguer(menu, OLD_TO_NEW_LIST_CLASS, CLASS_APPEAR, hamburguerSpan, EXIT_STRING)
    } 
})