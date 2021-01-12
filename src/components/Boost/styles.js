import styled from 'styled-components'
import BgBoost from '../../images/bg-boost-desktop.svg'

export const Boot = styled.div`
    margin: 0px;
    background-image: url(${BgBoost});
    background-size: cover;
    background-color: hsl(257, 27%, 26%);
    height: 200px;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    h1{
        font-size: 3rem;
        color: white;
    }
    button{
        background: hsl(180, 66%, 49%);
        border: none;
        padding: 10px 20px;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        transition: .3s;
        border-radius: 20px;
        font-family: 'Poppins', sans-serif;
        color: white;
    }
    button:hover{
        background: hsl(180, 66%, 69%);
    }
`;