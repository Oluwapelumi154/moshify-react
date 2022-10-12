import React from 'react';
import { PricingWrapper, PricingContainer } from './Style';
import { Card } from '../../components';
const Pricing = () => {
  return (
    <>
      <PricingWrapper>
        <PricingContainer>
          <Card />
          <Card />
          <Card />
        </PricingContainer>
      </PricingWrapper>
    </>
  );
};
export default Pricing;
