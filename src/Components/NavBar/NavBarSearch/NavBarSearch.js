import React from 'react';

import {X} from 'react-feather';

export default function NavBarSearch(props) {
  return (
    <div className={`navbar-search-section ${props.active ? 'navbar-search-section-active' : ''}`}>
      <input className='input' type="text" placeholder='Search here...'/>
      <X onClick={ () => {props.updateActiveSearch()}}/>
    </div>
  )
}
