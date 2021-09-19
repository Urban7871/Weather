import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import Header from './components/header/Header';
import WeatherList from './components/weather/WeatherList'

import './css/App.scss';

const App = () => {

    return (
        <BrowserRouter>
        <div>
        <Header />

        <Route path='/' exact> 
            <WeatherList />
        </Route>

        <Route path='/:id' exact>
            <WeatherList />
        </Route>
        
        </div>
        </BrowserRouter>
        
        )
}

export default App