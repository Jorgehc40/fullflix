import { useState, useEffect } from "react";
import { FooterComponent } from "../../components/footer/FooterComponent";
import { getList } from "../../api/api";

function Home() {
    const [movies, setMovies] = useState ([])

    useEffect(() => {
        setTimeout(()=>getList(setMovies), 10000);
    }, []);
    
    return(
        <div>
            <div>
                <h3>Imagem inicial</h3>
            </div>
            <div>
                <h3>Filmes Populares</h3>
            </div>
            <div>
                <h3>Filmes</h3>
                    {movies.map((movie) => (
                <h3>{movie.title}</h3>
                    ))}
            </div>
                <FooterComponent/>
            </div>
    );
}

export default Home;