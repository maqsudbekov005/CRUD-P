import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">React CRUD</Link>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/create" className="mr-4">Create User</Link>
          <Link to="/showuser">Show User</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;