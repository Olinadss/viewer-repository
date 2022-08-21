import React, { useState, useEffect } from 'react';
import './header.css'
import { GoSearch } from "react-icons/go";
import Input from '../input/Input';
import requestAPI from '../../services/githubAPI'

function Header() {
  const [searchValue, setSearchValue] = useState('');  

  useEffect(() => {
    (async function getUserData() {
        try {
            const response = await searchValue.get(`/${searchValue}/repos`);

            ctx.setUserData(response.data);
            ctx.setUserRepos(repos.data);
        } catch(err) {
            console.log(err);
        }
    })()
}, []);

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
        <button>
          <GoSearch />
        </button>
      </div>
    </div>
  );
}

export default Header;