import React from 'react'
import { Boost } from './components/Boost';
import { Footer } from './components/Footer';
import  {Header}  from './components/Header/index'
import { Main } from './components/Main'
import {Geral, Global} from './styles'


function App() {
  return (
    <Global>
    <Geral>
      <Header/>
      <Main/>
    </Geral>
    <Boost/>
    <Footer/>
    </Global>
  );
}

export default App;
