import styled from 'styled-components'
import shortenD from '../../images/bg-shorten-desktop.svg'

export const Container = styled.div`
    height:100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
   

    padding-top: 100px;
    div{
        grid-column: 1fr
    }
    h1{
        font-size: 4rem;
    }

    p{
        color:  hsl(257, 7%, 63%);

    }

    img{
        width:100%;
        left: 0px;

        
    }
    button{
        background: hsl(180, 66%, 49%);
        border: none;
        padding: 10px 20px;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        transition: .3s;
        border-radius: 30px;
        color: white;
        font-family: 'Poppins', sans-serif;
        margin-top: 50px;
    }
    button:hover{
        background: hsl(180, 66%, 69%);
    }

    @media(max-width: 768px){
        grid-template-columns: 1fr;
        
        img{
            order: -1;
        }
    } 
`;


export const Shorten = styled.div`
    background-image: url(${shortenD});
    background-size: cover;
    background-color: hsl(257, 27%, 26%);
    width: 100%;
    height: 150px;
    border-radius: 10px;
    margin-top: 50px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
input{
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    max-width: 976px;
}
button{
    background: hsl(180, 66%, 49%);
    border: none;
    padding: 10px 20px;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    transition: .3s;
    border-radius: 10px;
    color: white;
    font-family: 'Poppins', sans-serif;
    margin-left: 30px;
}
button:hover{
    background: hsl(180, 66%, 69%);
}

`
    
