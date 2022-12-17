import React from 'react';
import Navigation from '../components/Navigation';

const Header = () => {
    return (
      <div className="flex flex-row p-4 justify-between items-center w-full bg-white ">
        <h1 className="text-black text-2xl font-bold">Murce</h1>
        <Navigation />
      </div>
    );
}

export default Header;
