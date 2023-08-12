import styled from "styled-components";

const HeaderWrapper = styled.div`
  .header-top {
    display: flex;
    position: relative;
    justify-content: space-between;
    z-index: 9999 !important;

    a {
      font-family: "Inter-Regular" !important;
      font-size: 18px;
    }

    &__search {
      margin-right: 20px !important;
    }
  }
  option{
    background: #000;
  }

  

  .header-mob__burger{

  }

  .header-mob__menu{
    
  }

`;

export { HeaderWrapper };
