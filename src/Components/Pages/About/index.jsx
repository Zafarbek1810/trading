import React from "react";
import DashboardLayout from "../../Layout";

const About = () => {
  return (
    <DashboardLayout>
      <div className="privacy">

        <h1>About us:</h1>

        <div className="privacy__content">
          <p>
            Not without reason, the logo and symbol of our company is a fox. The
            fox is a very smart, cautious animal. Foxes have excellent hearing
            and scent. Our team, like foxes, detects unscrupulous companies and
            shows those who can be trusted.
          </p>
          <p>
            Our main goal is to help novice traders avoid mistakes and choose
            the right direction for themselves. Among our team are people with
            extensive experience in the field of economics: traders, analysts,
            crypto-investors, economists.
          </p>
          <p>
            This site is dedicated to reviews of various brokers. We carefully
            analyze companies so that you can choose all the functions and tools
            you need for your successful work.
          </p>
          <ul>
            <li>Why do you need a broker?</li>
            <li>What are the criteria for choosing a broker?</li>
            <li>How to choose a broker?</li>
            <li>What should be kept in mind when choosing a broker?</li>
          </ul>
          <p>
            Beginners and experienced traders can find many useful tools on the
            site:
          </p>
          <ul>
            <li>
              News from the world of forex, economics and cryptocurrencies
            </li>
            <li>Free trading signals</li>
            <li>Multicurrency calculator</li>
            <li>Training courses</li>
            <li>Forum</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default About;
