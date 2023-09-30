import 'axios' from 'axios';

export const getList = (useState) =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4bfb8622b99eb5234220bf7ecd17190a&language=pt-BR&page=1';`)
    .then((response)=>{
        setState(response.data.results);
    }).cath((error)=>{
        console.log(error);
    })
}