import React, { Component } from 'react';
import Card from './components/Cards';
import composers from './Composers.json'
import Header from './components/Header';
import Footer from './components/Footer';
import AddItemForm from './components/AddItemForm';
import Home from './pages/Home'
import Collection from './pages/Collection';
import { Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App()  {
    return (
<div>
    <Router>
        <Header>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/' element={<Collection/>} />                
            </Routes>
        </Header>
    </Router>
</div>
    );
}
export default App;