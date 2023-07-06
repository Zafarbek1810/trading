import styled from "styled-components";

const DashboardLayoutWrapper = styled.div`
    font-family: "Inter" !important;
    .main{
    display: flex;

    .sidebar{
        flex-shrink: 0;
        min-width: 260px;
        
    }

    .child{
        width:calc( 100% - 260px);
        margin-left: 80px;
    }

    @media (max-width: 1200px) {
    .sidebar{
        display: none;
    }
        .child{
        width:100%;
    }
    }
}

`

export { DashboardLayoutWrapper }