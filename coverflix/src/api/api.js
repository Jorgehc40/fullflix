const API_KEY = ˜4bfb8622b99eb5234220bf7ecd17190a˜;

const categories = [
    {
        name: "trending",
        title: "Em alta"
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name: "coverflixOriginals",
        title: "Originais Coverflix"
        path: `/discover/tv?api_key=${API_KEY}&language=pt-BR&with_networks=213`
    },
    {
        name: "topRated",
        title: "Populares"
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR',
    },
    {
        name: "comedy",
        title: "Comédias"
        path: `/discover/tv?api_key=${API_KEY}&language=pt-BR&page=1&with_genres=comedy`
    },
    {
        name: "trending",
        title: "Em alta"
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR',
    },
    {
        name: "trending",
        title: "Em alta"
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
    },
];

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3/${path}`;
        const response = await fetch(url);
        return await response.json();
    }   catch (error) {
        console.log("error getMovies: ", error);
    }
};
export default categories;