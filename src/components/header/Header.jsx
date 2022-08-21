import React, { useState, useContext } from 'react';
import './header.css'
import { GoSearch } from "react-icons/go";
import Input from '../input/Input';
import requestAPI from '../../services/githubAPI'
import Context from '../context/Context';

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const ctx = useContext(Context)  

async function getUserData() {
  try {
      const response = await requestAPI.get(`/${searchValue}/repos`);
      console.log(response);

      ctx.setUserData(response.data);
  } catch(err) {
      console.log(err);
  }
}

  return (
    <div className="container-header" >
      <div className='header'>
        GitHub Viewer
      </div>
      <div className='header'>
      <Input
          type="text"
          placeHolder="Digite seu username"
          idFor="username"
          action={e => setSearchValue(e.target.value)}
          name="username"
        />
        <button onClick={getUserData}>
          <GoSearch />
        </button>
      </div>
    </div>
  );
}

export default Header;