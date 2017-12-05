import React from 'react'; // using the react library
import {Link} from 'react-router-dom'; // using the react router dom importing link to make the route possible.
import Api from './api'; // using our api class

// refactoring the post component to be responsible to fetch a single post.
class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: ''
        };
    }

    componentDidMount() {
        let api = new Api();

        api.posts(this.props.match.params.id).then(data => {
            this.setState({
                title: data.title.rendered,
                content: data.content.rendered
            });
        });
    }

    render() {
        let post = this.state;

        return (
            <div className="row">
                <h3>{post.title}</h3>
                <div dangerouslySetInnerHTML={{__html: post.content}} />
            </div>
        );
    }
}

// refactoring the post list component to be responsible to fetch a list of posts
class PostList extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        let api = new Api();

        api.posts().then(data => {
            this.setState({
                posts: data
            });
        });
    }

    // we set the link to route to a location such the title of the post
    render() {
        let posts = this.state.posts.map((post, index) => 
            <h3 key={index}>
                <Link to={`/post/${post.id}`}>{post.title.rendered}</Link>
            </h3>);

        return (
            <div>{posts}</div>
        );
    }
}

// refactoring the export to export both post and post list classes in the post-list.js file
// this could be epanded each class as a component seperatly 
// but for simplicity we managed to join both clases on a single file.
export {Post, PostList};