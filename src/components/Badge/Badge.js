import React from 'react';
import { Section, Price } from './Style';

const Badge = ({ price, domain, type, top }) => {
  return (
    <>
      <Section top={top} type={type}>
        {domain}
        <Price type={type}>{price}</Price>
      </Section>
    </>
  );
};

export default Badge;
