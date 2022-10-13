import styled from 'styled-components';
import { color } from '../../global-style';
import Tick from '../../assets/icons/icons/tick.svg';
export const CardContent = styled.div`
  background-color: ${color.white};
  width: '300px';
  flex-grow: 1;
  // border-radius: 10px;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Pricing = styled.div`
  margin-top: 1.3rem;
  color: ${color.white};
  display: flex;
  align-items: center;
`;
export const Price = styled.span`
  display: inline-block;
  margin-right: 2rem;
  font-size: 4rem;
`;
export const CardButton = styled.button``;
export const CardHeader = styled.div`
  background-color: ${color.black};
  padding: 2rem 2.5rem 2.3rem 2.5rem;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: relative;
  img {
    position: absolute;
    height: 120px;
    right: 25px;
    top: 0;
  }
  h1 {
    font-size: 1.3rem;
    font-weight: 400;
    color: ${color.white};
  }
  p {
    color: ${color.white};
    margin-top: 1.3rem;
    font-size: 1.5rem;
  }
`;
export const CardBody = styled.div`
  padding: 1.5rem 2.5rem 1.5rem 2.5rem;
`;

export const ListGroup = styled.ul`
  list-style-type: none;
  padding: 0 2.5rem 1.5rem 2.5rem;
  list-style-image: url(${Tick});
`;
export const ListItem = styled.li`
  font-size: 1.6rem;
  margin-top: 2.7rem;
  padding-left: 1rem;
  font-weight: 500;
`;

export const Month = styled.span`
  display: inline-block;
  margin-top: 25px;
  font-size: 1.3rem;
  margin-right: 1.2rem;
  margin-left: -1.8rem;
`;
