import React from 'react';

import { Cab, Desktop, MobileM } from './styles';
import { useMedia } from '../../Hooks/useMedia';
import Hamburger from '../../images/icon-hamburger.svg';

export const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia('(max-width: 40rem)');

  function handleClick() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <Cab>
      <h2>Shortly</h2>
      {mobile ? (
        <button onClick={handleClick}>
          <img src={Hamburger} />
        </button>
      ) : (
        <Desktop>
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
        </Desktop>
      )}
      {mobileMenu && (
        <MobileM>
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
          <hr />
          <span>
            <button>Login</button>
            <button>Sing Up</button>
          </span>
        </MobileM>
      )}
    </Cab>
  );
};
