import { useEffect } from "react";
import { getMovies } from "../../api/api";


function Row({ title, path }) {
    const [movies, setMovies] = React.useState([]);
    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path);
            setMovies(data?.results);
        } catch (error) {
          console.log("fetchMovies error; ", error);
        }
    };

    useEffect{}

    return <div>Row</div>;
}

export default Row;