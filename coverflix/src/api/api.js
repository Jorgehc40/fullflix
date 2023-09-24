

import axios from 'axios';

export const getList = (setState) =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4bfb8622b99eb5234220bf7ecd17190a&language=pt-br&page=1`)
    .then((response)=>{
        setState(response.data.results);
    }).catch((error)=>{
        console.log(error);
    })
}