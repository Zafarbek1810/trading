import styled from "styled-components";

const StyledWrapper=styled.div`
    button{

        &:disabled{
            opacity: 0.5;
            cursor: not-allowed;
        }
    }
`

export default StyledWrapper;