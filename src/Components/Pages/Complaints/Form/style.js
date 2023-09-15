import styled from "styled-components";

const StyledWrapper=styled.div`
    button{

        &:disabled{
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    .complaints__form{
        display: flex;
        flex-direction: column;
        div{
            width: 100% !important;
        }
    }
`

export default StyledWrapper;