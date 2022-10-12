import styled from 'styled-components';
import { container, color } from '../../global-style';
import { Link } from 'react-router-dom';
export const HeroContainer = styled(container)`
  ${container};
  margin-inline: auto;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const Header = styled.div`
  background-color: ${color.black};
  padding-top: 70px;
  width: 100%;
`;
export const Column = styled.div`
  flex: 1;
  h1 {
    color: ${color.white};
    font-size: 2rem;
  }
  span {
    color: ${color.white};
    display: block;
    margin-top: 15px;
    font-size: 1.7rem;
  }
  img {
    width: 100%;
  }
  @media screen and (min-width: 1000px) {
    h1 {
      font-size: 7rem;
      margin-top: 8rem;
      line-height: 1.2;
    }
    span {
      font-size: 2rem;
      margin-top: 2rem;
    }
    img {
      max-width: 100%;
    }
    padding: 40px 0 40px 0;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 40px 25px 40px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    padding: 70px 0 70px 0;
  }
`;

export const ButtonLink = styled(Link)`
  border-radius: 40px;
  padding: 1.3rem 3.2rem 1.3rem 3.2rem;
  border: none;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  outline: none;
  white-space: nowrap;
  font-size: 1.6rem;
  background-color: ${color.white};
  color: ${color.black};
  font-weight: 600;
  margin-top: 3.5rem;
  @media screen and (min-width: 1000px) {
    padding: 1.8rem 5rem 1.8rem 5rem;
  }
`;
