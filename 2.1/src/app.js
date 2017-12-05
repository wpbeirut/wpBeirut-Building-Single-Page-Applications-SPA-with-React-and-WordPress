import Api from './api'; // import the api class that we create.
import React from 'react'; // import react from react
import ReactDOM from 'react-dom'; // import react dom to be able to render our components

// we will extend the app from react component , google inherentence of object oriented programming.
class App extends React.Component {

    // using the render method of react, explain more about available methods.
    render() {
        return (
            <div className="container">
                <h3>Hello, Headless WordPress!</h3>
            </div>
        );
    }
}

// the react dom render method 
ReactDOM.render(<App />, document.getElementById('app-container'));