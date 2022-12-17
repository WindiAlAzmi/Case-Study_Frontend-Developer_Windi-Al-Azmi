import React from 'react';
import {Link } from 'react-router-dom';

const NavigationMenu = ({setMenu}) => {

    return (
      <div className="flex flex-col justify-start p-4 ">
        <h3 className=" w-full text-left p-4 font-bold border-slate-200">Murce</h3>
        <ul className=" text-left ">
          <li className="w-full  border-b-2 border-slate-200 p-4">
            <Link to="/" onClick={() => setMenu(false)}>
              <h3>Home</h3>
            </Link>
          </li>
          <li className="w-full  border-b-2 border-slate-200 p-4">
            <Link to="/about" onClick={() => setMenu(false)}>
              <h3>About</h3>
            </Link>
          </li>
        </ul>
      </div>
    );
}

export default NavigationMenu;