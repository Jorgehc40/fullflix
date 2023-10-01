import { MainContainer } from "./Header.style"


export const Header = () => {
    const state = useSelector((state) => state.coverflix.movie)

    return(
        <MainContainer>
            <p>state.movie</p>
        </MainContainer>
    )
}