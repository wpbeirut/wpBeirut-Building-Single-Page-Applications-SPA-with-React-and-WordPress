import React from 'react';
import {Link} from 'react-router-dom';
import Api from './api';

class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
            author: ''
        };
    }

    componentDidMount() {
        let api = new Api();
        // adding the author using data._embedded.author[0].name 
        // same one that we used in the post list component to retrive the author
        api.posts(this.props.match.params.id).then(data => {
            this.setState({
                title: data.title.rendered,
                content: data.content.rendered,
                author: data._embedded.author[0].name
            });
        });
    }

    render() {
        let post = this.state;
        // adding the post.author to render the display of the post.
        return (
            <div className="row">
                <h3>{post.title} <small>by {post.author}</small></h3>
                <div dangerouslySetInnerHTML={{__html: post.content}} />
            </div>
        );
    }
}

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
            // adding the console log to check the data results.
            console.log(data);
        });
    }

    // adding in the redern method the post._embedded.author (author is an array)
    // so we put [index 0].name to retrieve the author from the wp api
    render() {
        let posts = this.state.posts.map((post, index) => 
            <h3 key={index}>
                <Link to={`/post/${post.id}`}>{post.title.rendered} <small>by {post._embedded.author[0].name}</small></Link>
            </h3>);

        return (
            <div>{posts}</div>
        );
    }
}

export {Post, PostList};