import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
    <Link to="/" className="text-xl font-bold">
      <img src="/pokemon-logo.png" alt="Pokemon Logo" className="h-10 inline-block" />
    </Link>
    <div>
      <Link to="/" className="mx-4">Home</Link>
      <Link to="/about" className="mx-4">About</Link>
      <Link to="/acerca-de" className="mx-4">Acerca de</Link>
    </div>
  </nav>
);

export default Navbar;