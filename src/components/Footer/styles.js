import styled from 'styled-components'

export const Foo = styled.div`
    background: hsl(260, 8%, 14%);
    color: white;

    display: grid;
    grid-template-columns: minmax(100px, 1fr) 1fr 1fr 1fr 200px;
    padding: 40px 8%;
    gap: 20px;
    *{margin:0px;}
    li{
        list-style-type: none;
        margin: 10px 0;
        font-size: 12px;
    }
    a+a{
        margin-left: 20px;
    }
    
    
    @media(max-width:850px){
        grid-template-columns: 1fr 1fr 1fr;
        
        h2{
            grid-column: span 3;
            justify-self: center;

        }
        div{
            grid-column: span 3;
            text-align: center;
            padding:40px 0;
        }
    }
    @media(max-width:550px){
        grid-template-columns: 1fr;

        h2{
            grid-column: span 1;
        }
        div{
            grid-column: span 1;
        }
        ul{
            text-align: center;
            padding: 0px;
        }
    }
`;