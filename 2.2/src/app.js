import Api from './api'; // import the api class
import React from 'react'; // import react 
import ReactDOM from 'react-dom'; // import react dom to manipulate the dom.
import PostList from './post-list'; // import the post list component.


class App extends React.Component {
    // create our constructor and initialize our start as an empty array
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    // create our api object, will use it to retrieve our posts and set the state
    componentDidMount() {
        // create a new instance of the api
        let api = new Api();

        // use the posts method to fetch all posts from wp api
        // then fill the state (array filling since it is will return a bulck of json posts)
        api.posts().then(data => {
            this.setState({
                posts: data
            });
        });
    }

    // render the html.
    render() {
        return (
            <div className="container">
                <h1>Welcome to Headless WordPress!</h1>
                <PostList posts={this.state.posts} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app-container'))