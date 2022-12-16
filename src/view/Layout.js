import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div className="bg-yellow-200 flex flex-col border border-2 black text-black">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;