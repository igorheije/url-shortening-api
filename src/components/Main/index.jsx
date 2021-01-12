import React from 'react';

import { Container, Shorten } from './styles';
import Illustration from '../../images/illustration-working.svg';
import { Statistics } from '../Statistics';

export const Main = () => {
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
      <Shorten>
        <form>
          <input type="text" placeholder="Shorten a link here..." />
          <button>Shorten it!</button>
        </form>
      </Shorten>
      <Statistics />
    </>
  );
};
