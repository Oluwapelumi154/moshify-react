import React from 'react';
import { Badge } from '../../components';
import { BadgeWrapper, BadgeContainer } from './Style';
const Badges = () => {
  return (
    <>
      <BadgeWrapper>
        <BadgeContainer>
          <Badge price='$90' domain='.com' type='primary' />
          <Badge price='$10' domain='.sg' type='secondary' />
          <Badge price='$11' domain='.space' type='secondary' />
          <Badge price='$14' domain='.info' type='secondary' />
          <Badge price='$10' domain='.net' type='secondary' />
          <Badge price='$10' domain='.xyz' type='secondary' />
        </BadgeContainer>
      </BadgeWrapper>
    </>
  );
};

export default Badges;
