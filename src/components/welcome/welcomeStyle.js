import styled from "styled-components";

export const Container = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  color: var(--dark-color);
  text-transform: capitalize;

  @media only screen and (max-width: 750px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 650px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 550px) {
    font-size: 14px;
  }
`;
