import styled from 'styled-components';

export const BadgeWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #faf8f8;
`;

export const BadgeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 3rem;
  grid-column-gap: 2rem;
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
