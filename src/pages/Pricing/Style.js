import styled from 'styled-components';
import { container } from '../../global-style';
export const PricingWrapper = styled.div`
  padding: 10rem 1.7rem 5rem 1.7rem;
  background-color: #faf8f8;
`;
export const PricingContainer = styled(container)`
  ${container};
  display: flex;
  flex-direction: row;
  grid-column-gap: 3rem;
  width: 1100px;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    grid-row-gap: 4rem;
    width: 100%;
  }
`;
