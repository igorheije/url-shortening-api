import React from 'react';

import { Container, Shorten, Links } from './styles';
import Illustration from '../../images/illustration-working.svg';
import { Statistics } from '../Statistics';

export const Main = () => {
  const [link, setLink] = React.useState('');
  const [error, setError] = React.useState(null);
  const [reduzida, setReduzida] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const url = 'https://api.shrtco.de/v2/shorten?url=';

  function handleSubmit(e) {
    e.preventDefault();
    setLink(e.target[0].value);
    e.target[0].value = '';
    e.target[0].focus();
  }

  function copiar(e) {
    e.preventDefault();
    const valor = e.target[0].value;
    const button = e.target[1];
    let inputTest = document.createElement('input');
    inputTest.value = valor;
    document.body.appendChild(inputTest);
    inputTest.select();
    document.execCommand('copy');
    document.body.removeChild(inputTest);

    button.innerText = 'Copied!';
    button.style.background = 'hsl(257, 27%, 26%)';
  }
  React.useEffect(() => {
    async function pesquisar(l) {
      if (l === '') return null;
      try {
        setLoading(true);
        setError(null);
        if (loading) document.body.style.cursor = 'wait';
        const response = await fetch(url + l, {
          method: 'GET',
        });
        if (response.ok) {
          const json = await response.json();
          const valor = await json.result;

          setReduzida((r) => [...r, valor]);
        } else throw new Error('Please, add a link valid');
      } catch (err) {
        setError(err.message);
      } finally {
        setLink('');
        setLoading(false);
        document.body.style.cursor = 'default';
      }
    }
    pesquisar(link);
  }, [link, loading]);

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
        <img src={Illustration} alt="Illustration" />
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
              <form onSubmit={copiar}>
                <input readOnly value={`https://${l.short_link2}`} />
                <button>Copy</button>
              </form>
            </Links>
          );
        })}

      <Statistics />
    </>
  );
};
