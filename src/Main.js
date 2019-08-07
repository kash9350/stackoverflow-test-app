import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../src/components/login';
import FeaturedQuestions from '../src/components/featured-question';
import UserProfile from '../src/components/user-profile';

const Main = () => (
    <Switch>
        <Route path='/' exact component={FeaturedQuestions}/>
        <Route path='/login'  component={Login}/>
        <Route path='/userProfile/:id'  component={UserProfile}/>
    </Switch>
)
export default Main