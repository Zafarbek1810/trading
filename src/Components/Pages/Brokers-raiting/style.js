import styled from "styled-components";

const BrokerRatingWrapper = styled.div`
    .ant-rate-star-zero{
        svg{
            fill: #d9d9d9;
        }
    }

    .stars{
        position: relative;
    }

    .stars::before{
        content: '';
        position: absolute;
        top: 5px;
        left: 0;
        width: calc((100% / 5) * ${props => props.average ? props.average : 0});
        height: 16px;
        background:yellow;
        z-index: -1;
    }
`

export{ BrokerRatingWrapper }