import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import Detail from './components/details';
import Car from './components/car';
import Default from './components/default'


class App extends Component {
    render() {
        return (
            <React.Fragment >                                                                                      
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/details" component={Detail} />
                    <Route path="/car" component={Car} />
                    <Route component={Default} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;