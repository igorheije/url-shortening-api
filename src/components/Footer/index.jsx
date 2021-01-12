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
        <a href="#">
          <i src={Github}></i>
        </a>
        <a href="#">
          <i src={Facebook}></i>
        </a>
        <a href="#">
          <i src={Instagram}></i>
        </a>
        <a href="#">
          <i src={Linkedin}></i>
        </a>
      </div>
    </Foo>
  );
};
