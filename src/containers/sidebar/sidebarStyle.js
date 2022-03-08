import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  position: sticky ;
  justify-content: center;
  width: 260px;
  background: var(--main-bg);
  padding: 35px;
  .sidebarwrapper {
    flex: 1;
    .logowrapper {
      width: 236px;
      margin: 0 auto;
      margin-bottom: 32px;
    }
    .walletinfo {
      background: var(--light-main);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 236px;
      border-radius: 12px;
      .btn {
        width: 90%;
        margin: 8px auto;
        display: flex;
        justify-content: space-between;
      }
    }
    .nav-list {
      width: 236px;
      display: flex;
      flex-direction: column;
      margin-top: 35px;
      .dashboard {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 14px 14px 14px 16px;
        background: var(--white);
        border-radius: 8px;
        img {
          margin-right: 15px;
        }
        p {
          font-weight: bold;
          font-size: 16px;
          line-height: 150%;
          color: var(--main-bg);
          text-align: center;
        }
      }
      .lists {
        width: 85%;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
      }
    }
    .refer {
      background: var(--info-bg);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 236px;
      border-radius: 12px;
      padding: 24px 21px;
      margin-top: 25px ;
      .speakertext {
        display: flex;
        .refertext {
          display: flex;
          flex-direction: column;
          .refertexth6 {
            font-weight: bold;
            font-size: 16px;
            line-height: 150%;
            color: var(--dark-color);
          }
          .refertextp {
            font-size: 14px;
            line-height: 150%;
            color: var(--light-dark);
          }
        }
      }
      .invite {
        justify-content: center;
        align-items: center;
        padding: 14px;
        width: 201px;
        background: var(--main-bg);
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
        line-height: 150%;
        align-items: center;
        color: var(--white);
      }
    }
  }
`;

export const Line = styled.div`
  width: 90%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0.5px solid #eafbff;
  margin: 0 auto;
`;

export const Payin = styled.button`
  border: none;
  width: 99.49px;
  height: 40px;
  background: var(--pink-btn);
  border-radius: 4px;
  font-size: 16px;
  line-height: 22px;
  color: var(--white);
`;

export const Payout = styled(Payin)`
  background: var(--white);
  color: var(--light-main);
`;
