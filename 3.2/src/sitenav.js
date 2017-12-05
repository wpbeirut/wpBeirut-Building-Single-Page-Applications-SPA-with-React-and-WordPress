// as seen same design pattern in create a react component
// 1- importing the libraries we will use
// 2- export default class component that extend from react.component
// 3- our constract that have the stae of array data 
// 4- mount method that will set the state of our component
// 5- render method that will render the html using bootstrap navigation classes.
import React from 'react';
import Api from './api';
import {Link} from 'react-router-dom';
export default class SiteNav extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    
    componentDidMount() {
        let api = new Api();

        api.categories().then(data => {
            this.setState({
                data: data
            });

            
        });
    }

    render() {
        // set the items in the correct format before returning the render
        // we used regular bootstrap html tags with classes to render the navigation correctly.
        let items = this.state.data.map((item, index) => {
            return (<li key={index}>
                <Link to={`/category/${item.id}`}>{item.name}</Link></li>)
        });
        return (<nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="/">Headless WordPress</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        {items}
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>);

    }
}