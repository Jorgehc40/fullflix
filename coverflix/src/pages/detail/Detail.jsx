import { useEffect, useState } from "react";
import { FooterComponent } from "../../components/footer/FooterComponent"
import { getList } from "../../api/api";
import { Grid, MainContainer } from "./Detail.style";

function Detail(){
    return (
        <MainContainer>
            <h1>Título do filme</h1>
            <Grid>
                <img src={`http://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}/>
                <div>
                    <p>Título:</p>
                    <p>Sinopse:</p>
                    <p>Data de lançamento:</p>
                    <p>Nota:</p>
                    <Link>Voltar para a Home</Link>
                </div>
            </Grid>
            
            <FooterComponent/>
        </MainContainer>
    )
}

export default Detail;