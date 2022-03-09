import styled from "styled-components";

export const Link = styled.div`
  display: flex;
  cursor: pointer;
  .linkwrapper {
    width: 98%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 24px;
      width: 120px;
      height: 131px;
      background: var(--white);
      border: 1px solid var(--line-color);
      border-radius: 8px;
      margin-right: 16px;
      .pquicklink {
        font-size: 12px;
        line-height: 150%;
        text-align: center;
        color: var(--dark-color);
        text-transform: capitalize;
      }
      .imgwrap {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 32px;
        height: 32px;
        border-radius: 200px;
      }
      .imgwrap1 {
        background: #f97316;
      }
      .imgwrap2 {
        background: #005061;
      }
      .imgwrap3 {
        background: #f59e0b;
      }
      .imgwrap4 {
        background: #5eead4;
      }
      .imgwrap5 {
        background: #9333ea;
      }
      .imgwrap6 {
        background: #ffcb00;
      }
      .imgwrap7 {
        background: #f43f5e;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .linkwrapper {
      display: grid;
      grid-template-columns: 100px 50px 100px;
      grid-template-rows: 80px auto 80px;
      column-gap: 20px;
      row-gap: 25px;
    }
  }
`;
