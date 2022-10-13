import React from 'react';
import { PricingWrapper, PricingContainer } from './Style';
import { Card } from '../../components';
const Pricing = () => {
  return (
    <>
      <PricingWrapper>
        <PricingContainer>
          <Card type='medium' />
          <Card />
          <Card type='medium' />
        </PricingContainer>
      </PricingWrapper>
    </>
  );
};
export default Pricing;
