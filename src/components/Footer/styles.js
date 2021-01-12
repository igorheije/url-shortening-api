import styled from 'styled-components'

export const Foo = styled.div`
    background: hsl(260, 8%, 14%);
    color: white;

    display: grid;
    grid-template-columns: max(300px) 1fr 1fr 1fr 100px;
    padding: 20px 8%;
    

    li{
        list-style-type: none;
        margin: 10px 0;
        font-size: 12px;
    }
    i{
        width: 100%;
    }
`;