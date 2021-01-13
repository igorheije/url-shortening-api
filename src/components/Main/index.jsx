import React from 'react';

import { Container, Shorten, Links } from './styles';
import Illustration from '../../images/illustration-working.svg';
import { Statistics } from '../Statistics';

export const Main = () => {
  const [link, setLink] = React.useState('');
  const [error, setError] = React.useState(null);
  const [reduzida, setReduzida] = React.useState([]);

  const url = 'https://api.shrtco.de/v2/shorten?url=';
  function handleSubmit(e) {
    e.preventDefault();
    setLink(e.target[0].value);
    e.target[0].value = '';
    e.target[0].focus();
  }

  React.useEffect(() => {
    async function pesquisar(l) {
      if (l === '') return null;
      try {
        setError(null);
        const response = await fetch(url + l, {
          method: 'GET',
        });
        if (response.ok) {
          const json = await response.json();
          const valor = await json.result;

          console.log(valor);
          setReduzida([...reduzida, valor]);
        } else throw new Error('Please, add a link valid');
      } catch (err) {
        setError(err.message);
      } finally {
      }
    }
    pesquisar(link);
  }, []);

  return (
    <>
      <Container>
        <div>
          <h1>More than just shorter links</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <button>Get Started</button>
        </div>
        <img src={Illustration} alt="" />
      </Container>
      <Shorten onSubmit={handleSubmit}>
        <input type="text" placeholder="Shorten a link here..." />
        {error && <span>{error}</span>}
        <button>Shorten it!</button>
      </Shorten>

      {reduzida.length !== 0 &&
        reduzida.map((l) => {
          return (
            <Links key={l.code}>
              <h4>{l.original_link}</h4>
              <span>
                <a target="_blank" href={l.short_link2}>
                  https://{l.short_link2}
                </a>
                <button>Copiar</button>
              </span>
            </Links>
          );
        })}

      <Statistics />
    </>
  );
};
