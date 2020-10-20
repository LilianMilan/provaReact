import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import Home from './pages/home/Home';
import Cards from './pages/cards/Cards';
import Pricing from './pages/pricing/Pricing';
import Blocks from './pages/blocks/Blocks';
import Forms from './pages/forms/Forms';

export default props=> (
    <Router history = {hashHistory}>
    <Route path = '/home' component = {Home}/>
    <Route path = '/cards' component = {Cards}/>
    <Route path = '/pricing' component = {Pricing}/>
    <Route path = '/blocks' component = {Blocks}/>
    <Route path = '/forms' component = {Forms}/>
    <Redirect from = '*' to ='/home'/>
    </Router>
)