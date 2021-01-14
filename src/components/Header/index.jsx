import React from 'react';

import { Cab, Desktop, MobileM } from './styles';
import { useMedia } from '../../Hooks/useMedia';
import Hamburger from '../../images/icon-hamburger.svg';

export const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia('(max-width: 44rem)');

  function handleClick() {
    setMobileMenu(!mobileMenu);
  }
  React.useEffect(() => {
    if (!mobile) setMobileMenu(false);
  }, [mobile]);
  return (
    <Cab>
      <h2>Shortly</h2>
      {mobile ? (
        <button onClick={handleClick}>
          <img src={Hamburger} alt="Hamburger" />
        </button>
      ) : (
        <Desktop>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
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
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
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
