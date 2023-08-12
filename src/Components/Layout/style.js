import styled from "styled-components";

const DashboardLayoutWrapper = styled.div`
    font-family: "Inter" !important;
    .header{
        position: relative;
        z-index: 9999 !important;
    }
    .main{
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 44 !important;

    &:after{
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-radius: 2355px;
        background: #141630;
        filter: blur(197px);
        z-index: -10 !important;
    }

    .sidebar{
        flex-shrink: 0;
        min-width: 260px;
        
    }

    .child{
        width:980px;
        /* margin-left: 80px; */
    }

    @media (max-width: 1200px) {
    .sidebar{
        display: none;
    }
        .child{
        width:100%;
        margin-left: 0px;
    }
    }
}

`

export { DashboardLayoutWrapper }