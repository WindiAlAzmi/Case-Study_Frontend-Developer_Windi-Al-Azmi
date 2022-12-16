import React from 'react';
import Navigation from '../components/Navigation';

const Header = () => {
    return (
      <div className="flex flex-row p-4 justify-between items-center w-full bg-slate-200  ">
        <h1 className="text-black text-2xl ">AppName</h1>
        <Navigation />
      </div>
    );
}

export default Header;
