import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: ${(props) => (props.width ? `${props.width}px` : "1330px")};
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

`

export {StyledContainer}