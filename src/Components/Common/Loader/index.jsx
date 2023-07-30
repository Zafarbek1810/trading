import React from "react";
import Styled from "./style";

const Loader = ({ loading2 }) => {
  return (
    <Styled>
      <div
        className="wrapper"
        style={{
          transform: `translateY(${loading2 ? "0%" : "100%"})`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <div className="wrap">
          <div className="svg">
            <img src="/images/Icons/footer-logo-333.svg" alt="logo" />
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default Loader;
