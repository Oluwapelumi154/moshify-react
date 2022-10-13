import styled from 'styled-components';
import { color } from '../../global-style';

export const Section = styled.section`
  color: ${({ type }) =>
    type === 'primary' ? `${color.white}` : `${color.black}`};
  background-color: ${({ type }) =>
    type === 'primary' ? `${color.blue}` : '#faf8f8'};
  font-size: 1.5rem;
  border-radius: 50px;
  text-align: center;
  padding: 0.2rem 0.1rem 0.2rem 0.1rem;
  white-space: nowrap;
  width: 100px;
  margin-top: ${({ top }) => (top ? '25px' : '0')};
  @media screen and (max-width: 800px) {
    padding: 0.5rem 0.3rem 0.5rem 0.3rem;
    font-size: 1.2rem;
    width: 120px;
    margin-inline: auto;
  }
`;

export const Price = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-size: ${({ type }) => (type === 'primary' ? '1.3rem' : '1.8rem')};
  text-transform: uppercase;
  font-weight: 500;
`;
