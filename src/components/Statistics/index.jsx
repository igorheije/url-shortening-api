import React from 'react';
import { Card, Advenced } from './styles';
import Brand from '../../images/icon-brand-recognition.svg';
import Detailed from '../../images/icon-detailed-records.svg';
import Fully from '../../images/icon-fully-customizable.svg';

export const Statistics = () => {
  return (
    <>
      <Advenced>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </Advenced>

      <Card>
        <section>
          <div>
            <img src={Brand} alt="Brand" />
          </div>
          <span>
            <h2>Brand Recognition</h2>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </span>
        </section>
        <section>
          <div>
            <img src={Detailed} alt="Detailed" />
          </div>
          <span>
            <h2>Detailed Records</h2>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </span>
        </section>
        <section>
          <div>
            <img src={Fully} alt="Fully" />
          </div>
          <span>
            <h2>Fully Customizable</h2>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </span>
        </section>
      </Card>
    </>
  );
};
