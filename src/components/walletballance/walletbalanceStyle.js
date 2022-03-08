import styled from "styled-components";

export const Container = styled.div`
  margin-top: 12px;
  /* margin-bottom: 0 ; */
  .walletwrapper {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
    .imgwrapper {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--white);
      img {
        height: 18px;
        width: 18px;
      }
    }
    .textcont {
      margin-right: 38px;
      .text {
        font-size: 14px;
        line-height: 150%;
        color: var(--white);
        text-transform: capitalize ;
      }
      .num {
        font-weight: bold;
        font-size: 16px;
        line-height: 150%;
        color: var(--white);
      }
    }
  }
`;
