import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: ${(props) => (props.width ? `${props.width}px` : "1400px")};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

`

export {StyledContainer}