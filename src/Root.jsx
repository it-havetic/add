import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Root = () => {
  return (
    <div>
      <nav className="bg-gray-800 py-4 mb-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Logo</h1>
            </div>
            <div className="">
              <ul className="flex items-center text-white">
                <li className="mr-4">
                  <Link to="/">Home</Link>
                </li>
                <li className="mr-4">
                  <Link to="/">All product</Link>
                </li>
                <li className="mr-4">
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </div>
            <Link to="/cart">
              <button className="bg-slate-100 py-2 px-5 rounded-md">
                Current cart items (0)
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Root