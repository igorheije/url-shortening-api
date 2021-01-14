import styled from 'styled-components'

export const Cab = styled.header`
        display: grid;
        grid-template-columns: max(100px) 1fr ;
        justify-content: center;
        align-items: center;
        color: hsl(260, 8%, 14%);
        position: relative;
    > button{
        cursor: pointer;
        justify-self: end;
        border: none;
        outline: none;
        padding-top: 8px;
    }
    > button > img{
        color:hsl(257, 7%, 63%);
    }
    a{
        text-decoration: none;
    }
    li{
        list-style-type: none;
    }
    ul{
        padding: 0px;
    }
`;

export const Desktop = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
    ul{
        display: flex; 
        padding: 0px;
    }
    li{
        margin-left: 20px;
        color:  hsl(257, 7%, 63%);
        transition: .3s;
    }
    li:hover{
        color: hsl(260, 8%, 14%);
    }
     span > button{
        background: white;
        border: none;
        padding: 10px 20px;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        transition: .3s;
        border-radius: 20px;
        background-color:  #eee;

    }
    span > button:hover{
        background: hsl(180, 66%, 49%);
        color: white;
    }
`;

export const MobileM = styled.div`

    position: absolute;
    width: 95%;
    top: 80px;
    border-radius: 10px;
    background: hsl(257, 27%, 26%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;


    li{
        color: white;
        padding: 10px 0;
    }
    hr{
        width: 80%;
        background: white;
    }
    span {
        display: block;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    span > button{
        background: transparent;
        border: none;
        padding: 10px 20px;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        transition: .3s;
        border-radius: 20px;
        color: white;
        width: 80%;
        margin-top: 5px;

    }
    span > button:hover{
        background: hsl(180, 66%, 49%);
        color: white;
    }
`