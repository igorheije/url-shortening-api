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
    margin-bottom: 100px;
    height: 100%;
    position: relative;

    section{
        background: white;
        margin: 40px 20px 20px 20px;
        width: 300px;
        position: relative;
        padding: 20px;
    }
    section+section{
        transform: translateY(40px);
    }
    section+section+section{
        transform: translateY(80px);
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
        transform: translateY(-60%)

    }
    h2{
        margin-top:0px
    }
    @media(max-width:850px){
        flex-direction: column;
    }
    
`