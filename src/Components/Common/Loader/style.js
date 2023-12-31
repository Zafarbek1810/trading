import styled from "styled-components";

const Styled = styled.div`
  position: relative;
  height: 100vh;
  z-index: 9999;

  .wrapper img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .siteGlobalLoader-wrapper img{
    width: 150px;
    height: 150px;
  }

`

export default Styled;