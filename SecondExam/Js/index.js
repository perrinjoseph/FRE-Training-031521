const albums = document.querySelector(".grid");
const input = document.querySelector(".search__input");
const form = document.querySelector(".search__form");
const container = document.querySelector(".main__header");

const itunesAPI = (()=>{

    const getAlbums = async (name) => {
        const response = await fetchJsonp(`https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=500`).then((response) => response.json());
        const results = response.results;
        return results;
    };
        
    return{
        getAlbums
    }
})();

const totalResults = (length,value)=>{
    return `<h1 class="main__header"><span>${length}</span> results for "<span>${value}</span>"</h1>`
}

const searchTemp = (name,img)=>{
    return `<article class="card">
    <img class="card__image" src="${img}">
    <span class="card__title">${name}</span>
    </article>
    `
}

input.addEventListener('keydown', async (e)=>{
    let state=[];
    const response = itunesAPI.getAlbums(e.target.value)
    const data = await response;
    let amt;
    data.forEach((val,index,arr)=>{
        console.log(val.collectionName);
        const temp = searchTemp(val.collectionName,val.artworkUrl100);
        // console.log(val.collectionName,val.artworkUrl100)
        state.push(temp);
        const header = totalResults(arr.length,e.target.value);
        container.innerHTML= header;

    })
    albums.innerHTML = state.join(" ");
    
    
})

form.addEventListener('submit',(e)=>{
        e.preventDefault();
})

