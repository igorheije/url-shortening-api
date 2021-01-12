import styled from 'styled-components'

export const Cab = styled.header`
    
    display: grid;
    grid-template-columns: max(100px) 1fr 200px;
    
    justify-content: center;
    align-items: center;
    color: hsl(260, 8%, 14%);

    ul{
        display: flex; 
        padding: 0px;
    }

    li{
        list-style-type: none;
        margin-left: 20px;
        color:  hsl(257, 7%, 63%);
        transition: .3s;

    }
    li:hover{
        color: hsl(260, 8%, 14%);
    }
    a{
        text-decoration: none;
    }
    button{
        background: white;
        border: none;
        padding: 10px 20px;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        transition: .3s;
        border-radius: 20px;

    }
    button:hover{
        background: hsl(180, 66%, 49%);
        color: white;
    }
`;