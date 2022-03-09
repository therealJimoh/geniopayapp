import styled from "styled-components";

export const History = styled.div`
  display: flex;
  margin-top: 30px;
  .historytext {
    margin-left: 12px;
    text-align: left;
    align-items: left;
    .historytext {
      font-size: 12px;
      line-height: 110%;
      text-align: left ;
      color: var(--light-dark);
      text-transform: capitalize;
    }
    .historyamount {
      font-weight: bold;
      font-size: 12px;
      line-height: 110%;
      color: var(--dark-color);
    }
  }
  .imghistory {
    width: 30px;
    height: 30px;
    background: #f9fafb;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
