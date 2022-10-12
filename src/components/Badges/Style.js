import styled from 'styled-components';
import { color } from '../../global-style';

export const PrimaryBadge = styled.div`
  color: ${color.white};
  background-color: ${color.blue};
  font-size: 1.5rem;
  border-radius: 50px;
  padding: 0.3rem 0.2rem 0.3rem 0.2rem;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    padding: 0.5rem 0.3rem 0.5rem 0.3rem;
    font-size: 1.2rem;
    width: 120px;
    margin-inline: auto;
  }
`;
export const BadgeSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
  align-items: center;
`;
export const SecondaryBadge = styled.div`
  white-space: nowrap;
  font-size: 1.8rem;
  color: ${color.black};
  font-weight: 600;
  align-self: center;
  @media screen and (max-width: 800px) {
    width: 120px;
    margin-inline: auto;
  }
`;

export const BadgeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 3rem;
  grid-column-gap: 2.5rem;
  width: 700px;
  justify-content: center;
  @media screen and (max-width: 800px) {
    line-height: 1.6;
    width: 100%;
    margin-top: 1.5rem;
    grid-row-gap: 3.5rem;
    grid-column-gap: 1.2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Dollar = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
  letter-spacing: 2px;
  font-size: 1.8rem;
  @media screen and (max-width: 800px) {
    margin-left: 0.5rem;
  }
`;
