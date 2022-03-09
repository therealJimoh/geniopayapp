import styled from "styled-components";

export const Account = styled.div`
  width: 332px;
  height: 164px;
  background: var(--account-bg);
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  .accountdiv {
    display: flex;
    flex-direction: column;
    padding: 20px;
    .accounttype {
      display: flex;
      justify-content: space-between;
      margin-bottom: 45px;
      .paccount {
        font-size: 14px;
        line-height: 150%;
        color: var(--dark-color);
      }
      .usd {
        font-size: 12px;
        line-height: 150%;
        color: var(--light-dark);
      }
    }
    .pamount {
      font-weight: bold;
      font-size: 24px;
      line-height: 100%;
      color: var(--dark-color);
    }
  }
`;
