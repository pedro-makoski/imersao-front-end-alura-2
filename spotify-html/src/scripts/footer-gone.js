const footer = document.querySelector("footer")

document.addEventListener("click", (e) => {
    if(!e.target.closest("footer")) {
        footer.classList.add("gone")
    }
})