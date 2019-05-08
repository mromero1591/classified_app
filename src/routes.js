import React from 'react';
import {Switch, Route} from 'react-router-dom';

//custom imports
import HomePage from './Components/HomePage/HomePage';
import SearchPage from './Components/SearchPage/SearchPage';
import SavedListingsPage from './Components/SavedListingsPage/SavedListingsPage';
import CreateItemInfoSection from './Components/CreateItemWizard/CreateItemInfoSection/CreateItemInfoSection';
import ProfilePage from './Components/ProfilePage/ProfilePage';

export default (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/search' component={SearchPage} />
        <Route path='/saved' component={SavedListingsPage} />
        <Route path='/create' component={CreateItemInfoSection} />
        <Route path='/profile' component={ProfilePage} />
    </Switch>
)