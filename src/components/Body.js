



import React from 'react';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex">
            <Sidebar />
            {/* <MainContainer /> */}
            <Outlet />
        </div>
    );
};

export default Body;








