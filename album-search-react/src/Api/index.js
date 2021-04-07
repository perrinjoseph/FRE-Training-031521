export const itunesAPI = ()=>{

    const getAlbums = async (name) => {
        const response = await fetch(`https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=500`).then((response) => response.json());
        const results = response.results;
        return results;
    };
    return{
        getAlbums
    }
}