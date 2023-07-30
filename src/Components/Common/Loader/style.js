import styled from "styled-components";

const Styled = styled.div`
position: relative;
  height: 30vh;
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