import React from "react";
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import TopNav from '../Navs/TopNav';
import MainNav from '../Navs/MainNav';
import { withRouter } from "react-router-dom";
import ContentNews from "../Common/ContentNews";
import LoadingBar  from "react-redux-loading-bar";

const MainLayout = (props) => {
 const {pathname} = props.location;
 console.log(pathname)
  return (
    <div>
      <section className="mooncode">
      <LoadingBar />

        <TopNav />
        <MainNav />
          {pathname === "/" ? <Header /> : "" }

            {props.children}
          {pathname ==='/' ? <ContentNews /> : ""}
        <Footer />
      </section>
    </div>
  );
};

export default withRouter(MainLayout);
