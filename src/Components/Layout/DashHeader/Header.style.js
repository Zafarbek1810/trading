import styled from "styled-components";

const HeaderWrapper = styled.div`
  .header-top {
    display: flex;
    justify-content: space-between;

    a {
      font-family: "Inter-Regular" !important;
      font-size: 18px;
    }

    &__search {
      margin-right: 20px !important;
    }
  }
`;

export { HeaderWrapper };
