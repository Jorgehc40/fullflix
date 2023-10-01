import styled from 'styled-components'
import backgroundImage from '../../img/Design sem nome.png'

export const MainContainer = styled.div`
    min-height: 100vh;
    background-color: #000;
    color: #fff;
    font-size: 2vw;
`

export const Part1 = styled.div`
    height: 100vh;
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
    h3 {
        margin: 0;

    }
`

export const Part2 = styled.div`
    height: 10vh;
    font-size: 4vh;
    padding-left: 2vw;
`

export const Grid = styled.div`
    display: grid;
    width: 80%;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: auto;
    gap: 3vw;
    margin-bottom: 8vh;
`