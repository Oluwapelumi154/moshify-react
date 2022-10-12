import React from 'react';
import CardButton from '../Button/Button';
import { CardContent, CardHeader, CardBody } from './Style';
const Card = () => {
  return (
    <>
      <CardContent>
        <CardHeader>Entry</CardHeader>
        <p>Easy start on the cloud</p>
        <CardBody>
          <CardButton>Buy Now</CardButton>
        </CardBody>
      </CardContent>
    </>
  );
};

export default Card;
