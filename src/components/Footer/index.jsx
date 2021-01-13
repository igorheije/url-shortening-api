import React from 'react';

import Instagram from '../../images/icon-instagram.svg';
import Facebook from '../../images/icon-facebook.svg';
import Linkedin from '../../images/icon-linkedin.svg';
import Github from '../../images/icon-github.svg';

import { Foo } from './styles';

export const Footer = () => {
  return (
    <Foo>
      <h2>Shortly</h2>
      <ul>
        <h3>Features</h3>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
      <ul>
        <h3>Resources</h3>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <ul>
        <h3>Company</h3>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      <div>
        <a target="_blank" href="https://github.com/igorheije">
          <img src={Github}></img>
        </a>
        <a target="_blank" href="https://www.facebook.com/igor.heije">
          <img src={Facebook}></img>
        </a>
        <a target="_blank" href="https://www.instagram.com/heijes.i/">
          <img src={Instagram}></img>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/igor-heije-morais-tomori-1052071b8/"
        >
          <img src={Linkedin}></img>
        </a>
      </div>
    </Foo>
  );
};
