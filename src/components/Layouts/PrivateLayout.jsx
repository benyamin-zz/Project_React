import React from "react";
import NavTopAdmin from "../admin/NavTopAdmin";
import SidebarAdmin from "../admin/SidebarAdmin";

const PrivateLayout = (props) => {
    return (
        <div>
            <NavTopAdmin />

            <div className="container-fluid">
                <div className="row">
                    <SidebarAdmin />
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

                        {props.children}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivateLayout;
