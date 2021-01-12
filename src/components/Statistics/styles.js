import styled from 'styled-components'


export const Advenced = styled.div`
    max-width: 500px;
    margin: auto;
    padding: 50px 0;

    h1{
        text-align: center;
    }
    p{
        text-align: center;
color:hsl(257, 7%, 63%);
    }
`
export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    section{
        background: white;
        margin: 50px 10px 0 10px;
        width: 300px;
        position: relative;
        padding: 20px;
    }
    p{
        color: hsl(257, 7%, 63%);
    }
    
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height:70px;
        background:hsl(255, 11%, 22%);
        border-radius: 50%;
        top: -40px;

        position: absolute;
    }
    h2{
        margin-top: 40px;
    }
`