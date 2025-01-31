const MAX_WIDTH_HAMBURGUER = 1058

function openByHamburguer(menu, classAppear,exitString, setFunc) {
    if(menu || menu.current) {
        setFunc(exitString)
        menu.current.classList.add(classAppear)
    }
}

function closeByHamburguer(menu, classAppear, setFunc, stand) {
    if(menu || menu.current) {
        setFunc(stand)
        menu.current.classList.remove(classAppear)
    }
}


function verificateIsPossibleOpen(menu, appearClass, isOpen) {
    if(!menu || !menu.current) return false
    return !menu.current.classList.contains(appearClass) && !isOpen
}

function verificateIsPossibleClose(menu, appearClass, isOpen) {
    if(!menu || !menu.current) return false 
    
    return menu.current.classList.contains(appearClass) && window.innerWidth <= MAX_WIDTH_HAMBURGUER && isOpen
} 

const CLASS_APPEAR = "appear"
const EXIT_STRING = <span>X</span>

export function handleElements(menu, hamburguer, isOpen, setIsOpen, setHamburguerAppereance, standardIconHamburguer) {
    const handle = () => {
        if(!menu.current || !hamburguer.current) return 

        const clickFunction = () => {
            if(verificateIsPossibleOpen(menu, CLASS_APPEAR, isOpen)) {
                setIsOpen(true)
                openByHamburguer(menu, CLASS_APPEAR, EXIT_STRING, setHamburguerAppereance)
            } else if(verificateIsPossibleClose(menu, CLASS_APPEAR, isOpen)) {
                closeByHamburguer(menu, CLASS_APPEAR, setHamburguerAppereance, standardIconHamburguer)
                setIsOpen(false)
            }
        }

        if(hamburguer) {
            hamburguer.current.addEventListener("click", clickFunction)
        }
        
        document.addEventListener("click", (e) => {
            if(!e.target.closest(".sidebar") && !e.target.closest(".hamburguer")){
                if(verificateIsPossibleClose(menu, CLASS_APPEAR, isOpen)) {
                    setIsOpen(false)
                    closeByHamburguer(menu, CLASS_APPEAR, setHamburguerAppereance, standardIconHamburguer)
                }
            }
        })

        window.addEventListener("resize", () => {
            if (window.innerWidth > MAX_WIDTH_HAMBURGUER) {
                if(verificateIsPossibleOpen(menu, CLASS_APPEAR, isOpen)) {
                    openByHamburguer(menu, CLASS_APPEAR, EXIT_STRING, setHamburguerAppereance)
                    setIsOpen(true)
                }     
            }

            if (window.innerWidth <= MAX_WIDTH_HAMBURGUER) {
                if(verificateIsPossibleClose(menu, CLASS_APPEAR, isOpen)) {
                    closeByHamburguer(menu, CLASS_APPEAR, setHamburguerAppereance, standardIconHamburguer)
                    setIsOpen(false)
                }     
            }    
        }) 

        return () => {
            if(hamburguer && hamburguer.current) {
                hamburguer.current.removeEventListener("click", clickFunction)
            }
        }
    }
    return handle
}