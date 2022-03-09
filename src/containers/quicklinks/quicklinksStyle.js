import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  .quicklinkwrapper {
    width: 95%;
    margin: 0 auto;
    .linkheader {
      margin: 24px;
      .headlink {
        font-weight: bold;
        font-size: 18px;
        line-height: 130%;
        color: var(--dark-color);
      }
      .plink {
        font-size: 14px;
        line-height: 120%;
        color: var(--light-text);
      }
    }
    
  }
`;
