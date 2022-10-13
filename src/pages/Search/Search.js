import React from 'react';
import Badge from '../../components/Badge/Badge';
import {
  SearchContainer,
  FormBtn,
  Form,
  SearchSection,
  InputGroup,
  Cont,
  Dollar,
  SearchIcon
} from './Style';
const Search = () => {
  return (
    <>
      <SearchSection>
        <SearchContainer>
          <h2>
            Starting at <Dollar />
            10 Per Month
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            exercitationem?
          </p>
          <Cont>
            <InputGroup>
              <Form type='text' placeholder='Enter domain name here....' />
              <FormBtn>
                <SearchIcon />
                Search
              </FormBtn>
            </InputGroup>
          </Cont>
        </SearchContainer>
      </SearchSection>
    </>
  );
};

export default Search;
