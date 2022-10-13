import styled from 'styled-components';
import { color } from '../../global-style';
import { Link } from 'react-router-dom';
export const Button = styled(Link)`
  border: none;
  margin-top: 2.3rem;
  margin-bottom: 2rem;
  width: 100%;
  outline: none;
  padding: 1.8rem 2rem 1.8rem 2rem;
  border: 1px solid ${color.black};
  text-decoration: none;
  color: ${color.black};
  display: block;
  text-align: center;
  background-color: transparent;
  font-size: 1.6rem;
  transition: background 0.5s;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 50px;
  &:hover {
    background-color: ${color.black};
    color: ${color.white};
    font-weight: 500;
  }
`;
