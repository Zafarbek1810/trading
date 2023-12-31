import styled from "styled-components";

const HomePageWrapper = styled.div`
  h1{
    margin-bottom: 25px;
    font-size: 32px;
    font-weight: bold;
  }

  
`;

const SignalWrapper = styled.div`
  .signal-wrap {
    margin-bottom: 50px;
    .signal-item {
      padding-top: 50px;
      padding-bottom: 50px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);

      .signal-item-top {
        display: flex !important;
        align-items: center;
        margin-bottom: 20px;
        p {
          margin-right: 15px;
        }
        span {
          font-family: "Inter-Bold";
          font-size: 18px;
          text-transform: uppercase;
          font-weight: 700;
        }
        span.green {
          color: #03cb9b;
        }
        span.red {
          color: #bd0308;
        }
      }
      .signal-item-center {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 20px;
        h5 {
          font-family: "Inter-Bold";
          font-size: 24px;
          margin-right: 23px;
          font-weight: 900;
        }
        .box {
          display: flex;
          flex-wrap: wrap;

          .signal-item-center-text {
            display: flex;
            font-family: "Inter-Regular";
            font-size: 24px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin-right: 25px;
            .green {
              color: #00ff47;
              margin-right: 7px;
            }
            .red {
              color: #ff1d6e;
              margin-right: 7px;
            }
            .blue {
              margin-right: 7px;
              color: #0047ff;
            }
          }
        }
      }
    }
    .last{
        border-bottom: none !important;
      }
  }
  .sel-box{
    margin-right: 10px;
  }

  @media (max-width: 500px) {
    overflow-x:auto;
  }
`;

const SingleWrapper = styled.div`
  .signal-single__top{
    height: 70vh;
    width: 100%;
  }
`

export { HomePageWrapper, SignalWrapper, SingleWrapper };
