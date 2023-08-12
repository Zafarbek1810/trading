import React from "react";
import CountUp from "react-countup";
import styled from "styled-components";
// import Styled from "./style";

const Styled = styled.div`
position: relative;
  height: 100vh;
  z-index: 9999;

  .wrapper img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .siteGlobalLoader-wrapper img{
    width: 150px;
    height: 150px;
  }

  .count{
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: Inter;
    font-weight: 900;
    font-size: 48px;
  }
`

const Loader = ({ loading2 }) => {
  return (
    <Styled>
      <div
        className="wrapper"
        style={{
          transform: `translateY(${loading2 ? "-100%" : 0})`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <div className="wrap">
          <div className="svg">
            <img src="/images/Icons/footer-logo-333.svg" alt="logo" />
          </div>

          <div className="count">
              <CountUp
                end={100}
                duration={1.5}
              />%
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default Loader;
