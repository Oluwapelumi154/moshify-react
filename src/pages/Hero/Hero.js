import React from 'react';
import { HeroContainer, Header, Row, ButtonLink, Column } from './style';
const Hero = () => {
  return (
    <Header>
      <HeroContainer>
        <Row>
          <Column>
            <h1>Cloud Hosting For Pros</h1>
            <span>Deploy your websites in less than 60 seconds.</span>
            <ButtonLink to='/get-started'>Get Started</ButtonLink>
          </Column>
          <Column>
            <img src={require('../../assets/images/banner.png')} alt='hero' />
          </Column>
        </Row>
      </HeroContainer>
    </Header>
  );
};

export default Hero;
