//make this app.js show the home page and the collection page

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import './App.css';

class App extends Component {
    render() {
        return (
        <Router>
            <Routes>
            <Route exact path="/" component={Collection} />
            <Route exact path="/collection" component={Collection} />
            </Routes>
        </Router>
        );
    }
}

export default App;