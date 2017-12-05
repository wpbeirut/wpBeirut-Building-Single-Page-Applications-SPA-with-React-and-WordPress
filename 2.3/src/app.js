import Api from './api';
import React from 'react';
import ReactDOM from 'react-dom';
import  { HashRouter, Switch, Route } from 'react-router-dom'; // adding 3 components from react router dom (explain each).
import {PostList, Post} from './post-list'; // importing both post list and post


class App extends React.Component {
    //we are using the switch commponents to setup the routs of these components 
    render() {
        return (
            <div className="container">
                <h1>Welcome to Headless WordPress!</h1>
                <Switch>
                    <Route exact path="/" component={PostList} />
                    <Route path="/post/:id" component={Post} />
                </Switch>
            </div>
        );
    }
}

// adding the hashrouter to make the routef work for our app
ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('app-container'))