import styled from 'styled-components';
import { container, color } from '../../global-style';
import { FaDollarSign, FaSearch } from 'react-icons/fa';

export const SearchContainer = styled(container)`
  ${container};
  h2 {
    margin-bottom: 1.2rem;
    color: ${color.black};
    font-weight: 600;
    font-size: 3rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 500;
  }
  @media screen and (max-width: 800px) {
    h2,
    span {
      text-align: center;
    }
    p {
      line-height: 1.7;
      font-size: 1.8rem;
      font-weight: 500;
      color: ${color.black};
    }
  }
`;
export const Dollar = styled(FaDollarSign)`
  font-size: 2.8rem;
  font-weight: 600;
`;
export const SearchSection = styled.div`
  background-color: #faf8f8;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 90px 0 90px 0;

  @media screen and (max-width: 800px) {
    padding: 35px 2rem 30px 2rem;
  }
`;
export const Form = styled.input`
  outline: none;
  border: none;
  flex-grow: 2;
  background: transparent;
  border-radius: 50px;
  padding: 0 2rem 0 2rem;
  font-size: 1.8rem;
  font-weight: 500;
  height: 100%;
  color: ${color.black};
  &::placeholder {
    color: ${color.black};
    font-size: 1.8rem;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

export const InputGroup = styled.div`
  border: 1px solid ${color.black};
  display: flex;
  ouline: 0;
  align-items: center;
  border-radius: 50px;
  background-color: ${color.white};
  padding: 0 0.5rem 0 0.5rem;
  height: 70px;
  width: 700px;
  margin-top: 4rem;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 50px;
  }
`;
export const FormBtn = styled.button`
  outline: 0;
  border: none;
  height: 100%;
  background-color: ${color.black};
  padding: 2rem 0 2rem 0;
  text-transform: uppercase;
  font-size: 1.7rem;
  margin: 18px 0 18px 0;
  font-weight: 600;
  color: ${color.white};
  border-radius: 50px;
  width: 200px;
  height: 60px;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const SearchIcon = styled(FaSearch)`
  margin-right: 1.2rem;
  color: ${color.white};
`;

export const Cont = styled.div`
  display: flex;
  justify-content: center;
`;
