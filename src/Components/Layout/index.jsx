import React from "react";
import { DashboardLayoutWrapper } from "./style";
import Header from "./DashHeader/Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Container from "../Common/Container";

const DashboardLayout = ({ children }) => {
  return (
    <DashboardLayoutWrapper>
      <Container>
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="child">{children}</div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Container>
    </DashboardLayoutWrapper>
  );
};

export default DashboardLayout;
