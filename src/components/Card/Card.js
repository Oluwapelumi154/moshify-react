import React from 'react';
import CardButton from '../Button/Button';
import Popular from '../../assets/icons/popular.svg';

import {
  CardContent,
  Pricing,
  Month,
  ListGroup,
  ListItem,
  CardHeader,
  Price,
  CardBody
} from './Style';
import Badge from '../Badge/Badge';
const Card = ({ type }) => {
  return (
    <>
      <CardContent type={type}>
        <CardHeader>
          <h1>Entry</h1>
          <Pricing>
            <Price>$14</Price>
            <Month>/month</Month>
            <Badge top={true} type='primary' domain='10%' price='Off' />
          </Pricing>
          <p>Easy start on the cloud</p>
          <img src={Popular} alt='popular' />
        </CardHeader>
        <CardBody>
          <ListGroup>
            <ListItem>Unlimited Websites</ListItem>
            <ListItem>Unlimited BandWidths</ListItem>
            <ListItem>100GB SSD Storage</ListItem>
            <ListItem>3GB RAM</ListItem>
          </ListGroup>
          <CardButton to='/payment'>Buy Now</CardButton>
        </CardBody>
      </CardContent>
    </>
  );
};

export default Card;
