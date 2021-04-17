export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=RaeICO4qpGxUDWN1rVPZjhiDFDEXQLpI`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    //Agafem del JSON només el que ens interessa:
    const gifs = data.map( img => 
        (
            {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url //posem interrogacio, si no la porta no passa res
            }
        )

    );

    return gifs;
}