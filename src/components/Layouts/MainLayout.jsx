import React from "react";
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import TopNav from '../Navs/TopNav';
import MainNav from '../Navs/MainNav';
import { withRouter } from "react-router-dom";

const MainLayout = (props) => {
 const {pathname} = props.location;
 console.log(pathname)
  return (
    <div>
      <section className="mooncode">
        <TopNav />
        <MainNav />
          {pathname === "/" ? <Header /> : "" }

            {props.children}

        <Footer />
      </section>
    </div>
  );
};

export default withRouter(MainLayout);
