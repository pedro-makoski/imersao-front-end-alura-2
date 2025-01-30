function substituir(string, key, value) {
    let origin = string;
    let newString = string.replace(key, value);
    while(origin !== newString) {
        origin = newString;
        newString = string.replace(key, value);
    }

    return newString
}

function substituirObj(string, obj) {
    let newString = string;
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    for(let i = 0; i < values.length; i++) {
        newString = substituir(newString, `{${keys[i]}}`, values[i]);
    } 

    return newString;
}


const stringArtist = '<div class="card artist"><a href="" rel="next"><div class="artist__visual"><img src="{urlImg}"><div class="player"><span class="fa fa-play"></span></div></div><div><h2>{name}</h2><p>{genre}</p></div></a></div>'

const inputSearch = document.getElementById("search-input");
const cardsPlaylist = document.getElementById("playlists")
const cardsArtists = document.getElementById("artists")

function displayResults(jsons) {
    cardsPlaylist.classList.add(HIDDEN_CLASS)
    cardsArtists.classList.remove(HIDDEN_CLASS)
    resultString = ""

    jsons.map((json) => {
        resultString+=substituirObj(stringArtist, json)
    })

    cardsArtists.innerHTML = resultString
} 

function displayError() {
    cardsPlaylist.classList.add(HIDDEN_CLASS)
    cardsArtists.classList.remove(HIDDEN_CLASS)
    cardsArtists.innerHTML = '<p style="margin:auto">Ops!! alguma coisa deu errado</p>'
}

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    try {
        fetch(url)
            .then((response) => response.json())
            .then((result) => displayResults(result))
            .catch(() => displayError())
    }catch(e) {
        displayError()
    }
}

const HIDDEN_CLASS = "hidden"

inputSearch.addEventListener("input", () => {
    const searchValue = inputSearch.value.toLowerCase()
    if(searchValue === "") {
        cardsPlaylist.classList.remove(HIDDEN_CLASS)
        cardsArtists.classList.add(HIDDEN_CLASS)
        return 
    }    

    requestApi(searchValue)
})