import React from 'react';

import {X} from 'react-feather';

export default function NavBarSearch(props) {

  function submitOnEnter(keyCode) {
    if(keyCode === 13) {
      props.updateActiveSearch();
    }
  }

  return (
    <div className={`navbar-search-section ${props.active ? 'navbar-search-section-active' : ''}`}>
      <input onKeyUp={(e) => submitOnEnter(e.keyCode)} className='input' type="text" placeholder='Search here...'/>
      <X onClick={ () => {props.updateActiveSearch()}}/>
    </div>
  )
}
