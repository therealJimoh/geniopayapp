import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 204px;
  height: 38px;
  background: var(--off-white);
  border: 1px solid #aac0c5;
  border-radius: 16px;
  .searchinput {
    border: none;
    background: var(--off-white);
    align-items: center;
  }
  img {
    margin: 0 8px 0 2px;
  }

  @media only screen and (max-width: 850px) {
    display: none;
  }
  @media only screen and (max-width: 550px) {
    display: none;
  }
`;
