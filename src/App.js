import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
