import styled from "styled-components";

export const Transaction = styled.div`
  display: flex;
  margin-top: 45px;
  .transactwrapper {
    width: 93%;
    margin: 0 auto;
    .cta-transact {
      display: flex;
      justify-content: space-between;
      .activity {
        display: flex;
        align-items: center;
        .h4activity {
          margin-right: 25px;
          font-weight: bold;
          font-size: 18px;
          line-height: 130%;
          color: var(--dark-color);
        }
        .pactivity {
          margin-right: 4px;
          font-size: 14px;
          line-height: 130%;
          align-items: center;
          text-align: center;
          color: var(--light-green);
        }
      }
      .h4cta {
        font-weight: bold;
        font-size: 16px;
        line-height: 150%;
        align-items: center;
        color: var(--light-green);
      }
    }
    .transacthistory {
      width: 50%;
      display: flex;
      justify-content: space-between;
      margin-left: auto;
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 850px) {
    .transacthistory {
      min-width: 100% ;
    }
  }
  @media only screen and (max-width: 350px) {
    .transacthistory {
      flex-direction:column ;
      justify-content: flex-start;
    }
  
  }
`;
