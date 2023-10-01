/* eslint-disable no-undef */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { getDetail } from "../../../api/api"
import { getMovieInfo } from "../../../../redux/coverflixSlice";
import { useDispatch } from "react-redux";
import { link } from "react-router-dom";

export const Card = ({movie}) => {
    const [movieDetails, setMovieDetails] = useState()
    const dispatch = useDispatch();

    const onHoverDetails = (e) =>{
        getDetail(e.target.id, setMovieDetail)
    }

    useEffect(()=>{
        dispatch(getMovieInfo(movieDetail))
    },[movieDetail])

    return (
        <MainContainer to={"/detail"} id={movie.id} onMouseEnter={onHoverDetail}>
            <img src={'http://image.tmdb.org/t/p/w500/${props.movie.poster_path}'}
            id={movie.id}
            alt={`Imagem do poster do filme ${movie.title}`}
            onMouseEnter={(e) => onHoverDetails(e)}
            />
            <div className="infoContainer">
                <h4>Título: {props.movie.title}</h4>
                <h4>Nota: {props.movie.vote_average}</h4>
            </div>
        </MainContainer>
    );
};