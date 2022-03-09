import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  .verify {
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: var(--green);
  }
  .verifyname {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: var(--light-dark);
  }
  align-items: center;
  > * {
    margin-right: 4px;
  }
`;
