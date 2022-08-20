import React from 'react';
import './header.css'
import { GoSearch } from "react-icons/go";

function Header() {
  return (
    <div className="container-header" >
      <div className='header'>
        GitHub Viewer
      </div>
      <div className='header'>
        <button>
          <GoSearch />
        </button>
      </div>
    </div>
  );
}

export default Header;