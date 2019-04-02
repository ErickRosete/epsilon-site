import React from 'react'
import MainNavigation from "./MainNavigation/MainNavigation";
import Chatbot from "../../containers/Chatbot/Chatbot"
import Footer from "./Footer/Footer"
import "./Layout.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation navbarColor={props.navbarColor} />
      <main className="main-content">{props.children}</main>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Layout;
