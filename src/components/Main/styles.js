import styled from 'styled-components'
import shortenD from '../../images/bg-shorten-desktop.svg'
import shortenM from '../../images/bg-shorten-mobile.svg'

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
        margin: 0px;
    }
    p{
        color:  hsl(257, 7%, 63%);
    }
    img{
       width: 120%; 
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
        padding-top: 50px;
        text-align: center;
        img{
            order: -1;
        }
        h1{
        font-size: 3.5rem;
        margin: 0px;
        }
    } 
`;


export const Shorten = styled.form`
    background-image: url(${shortenD});
    background-size: cover;
    background-color: hsl(257, 27%, 26%);
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-top: 50px;
    padding: 50px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
span{
    color: hsl(0, 87%, 67%);
}
input{ 
    padding: 20px;
    font-size: 1.2rem;
    border-radius: 8px;
    width: 100%;

}
button{
    background: hsl(180, 66%, 49%);
    border: none;
    padding: 20px 20px;
    outline: none;
    cursor: pointer;
    font-size: 1.2rem;
    transition: .3s;
    border-radius: 10px;
    color: white;
    font-family: 'Poppins', sans-serif;
    margin-left: 30px;
    width: 170px;

}
button:hover{
    background: hsl(180, 66%, 69%);
}
@media(max-width: 750px){
    flex-direction: column;
    background-image: url(${shortenM});
    button{
        width: 100%;
        margin-top: 20px;
        margin-left: 0px;
    }
}
`
    
export const Links = styled.div`
    background-color: white;
    padding: 20px;
    margin-top: 20px;

    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    a{
        text-decoration: none;
        color: hsl(180, 66%, 49%);
    }
    
    button{
    background: hsl(180, 66%, 49%);
    border: none;
    padding: 10px 20px ;
    outline: none;
    cursor: pointer;
    font-size: .7rem;
    transition: .3s;
    border-radius: 4px;
    color: white;
    font-family: 'Poppins', sans-serif;
        margin-left: 20px;
}
button:hover{
    background: hsl(180, 66%, 69%);
}
`
