import React from 'react';

import { Cab } from './styles';

export const Header = () => {
  return (
    <Cab>
      <h2>Shortly</h2>
      <ul>
        <a href="#">
          <li>Features</li>
        </a>
        <a href="#">
          <li>Pricing</li>
        </a>
        <a href="#">
          <li>Resources</li>
        </a>
      </ul>
      <span>
        <button>Login</button>
        <button>Sing Up</button>
      </span>
    </Cab>
  );
};
