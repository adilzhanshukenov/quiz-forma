import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./style.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="main">
      <Header />
      <div className="layout-style">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
