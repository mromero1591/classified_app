import React, {useState} from 'react';
import {Menu, Search, Home, Heart, PlusSquare, User, X} from 'react-feather';
import {Link} from 'react-router-dom';

function NavBar(props) {
    const [openMenu, setOpenMenu] = useState(false);
    const [linkStates, setActiveLink] = useState({
        home: true,
        search: false,
        saved: false,
        create: false,
        profile: false
    });

    function updateLinkToFalse() {
    //Purpose: Update all links to false.
    //Params: none.
    //return: none.
    //outcome: all items in linkStates are false.
        Object.keys(linkStates).forEach( (index) => {
            linkStates[index] = false;
        })
    }

    function updateActiveLink(link) {
    //Purpose: updates clicked link to active.
    //Params: string, the linked clicked.
    //return: none.
    //outcome: the clicked linke is set to active while rest are set to false.

        //set all links to false.
        updateLinkToFalse();

        //update the cliked link to true.
        var newActiveLink = {
            ...linkStates,
        };
        newActiveLink[link] = true;

        //set the new link state.
        setActiveLink(newActiveLink);
        setOpenMenu(false);
    }

    return(
        <nav className='navbar'>
            <div className="navbar-logos">
                <div className="navbar-hamburger">
                    <Menu onClick={() => {setOpenMenu(openMenu ? false : true)}}/>
                </div>
                <div className="navbar-logo">
                Classified
                </div>

                <div className="navbar-search">
                    <Search />
                </div>
            </div>
            

            <div className={`navbar-items ${openMenu ? 'menu-open' : ''}`}>
                <X onClick={() => {setOpenMenu(openMenu ? false : true)}} className={`close-menu-icon ${openMenu ? 'menu-open-icon' : ''}`} />
                <Link to='/' onClick={() => updateActiveLink('home')} className={`navbar-item ${linkStates.home ? 'active-link' : ''}`} ><span><Home /> Home Page</span></Link>
                <Link to='/search' onClick={() => updateActiveLink('search')} className={`navbar-item ${linkStates.search ? 'active-link' : ''}`} ><span><Search /> Search Listings</span></Link>
                <Link to='/saved' onClick={() => updateActiveLink('saved')} className={`navbar-item ${linkStates.saved ? 'active-link' : ''}`} ><span><Heart /> Saved Listings</span></Link>
                <Link to='/create' onClick={() => updateActiveLink('create')} className={`navbar-item ${linkStates.create ? 'active-link' : ''}`} ><span><PlusSquare /> Create Listings</span></Link>
                <Link to='/profile' onClick={() => updateActiveLink('profile')} className={`navbar-item ${linkStates.profile ? 'active-link' : ''}`} ><span><User /> My Profile</span></Link>
            </div>
        </nav>
    );

}

export default NavBar;