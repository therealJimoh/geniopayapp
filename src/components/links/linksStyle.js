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
      grid-template-columns: 170px 170px 170px;
      grid-template-rows: 80px auto 80px;
      column-gap: 20px;
      row-gap: 25px;
    }
  }
  @media only screen and (max-width: 550px) {
    .link {
      width: 100px;
      padding: 18px;
      height: 110px;
    }
    .linkwrapper {
      display: grid;
      grid-template-columns: 115px 115px 115px;
      grid-template-rows: 100px 100px;
      column-gap: 5px;
      row-gap: 39px;
    }
  }
  @media only screen and (max-width: 350px) {
    .link {
      width: 70px;
      padding: 15px;
      height: 85px;
    }
    .linkwrapper {
      display: grid;
      grid-template-columns: 90px 90px 90px;
      grid-template-rows: 100px 100px;
      column-gap: 5px;
      row-gap: 39px;
    }
  }
`;
