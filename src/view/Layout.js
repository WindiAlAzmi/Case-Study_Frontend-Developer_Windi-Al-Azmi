import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div className=" h-screen flex flex-col border border-2 black text-black">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;