// same pattern of react components.
// 1- import needed libraries
// 2- export default class component name that extends PostList (google inheretance polymorphisme oop)
// 3- contructor
// 4- check the methods comments such fetchData, componentWillReceiveProps , componentDidMount
import React from 'react';
import {PostList} from './post-list';
import Api from './api';

export default class CategoryPosts extends PostList {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    // refactoring the code it is better for not repeating methods
    // doing less code.
    fetchData(categoryId) {
        let api = new Api();
        // instead of an id singular send it as an array. {}
        api.posts({
            category: categoryId
        }).then(data => {
            this.setState({
                posts: data
            });
        });
    }
    // this will fix the issue of url by receiving new props
    // a default method by react to update the component by receiving new porps 
    // so it will update the state, here we are updating the id.
    componentWillReceiveProps(newProps) {
        this.fetchData(newProps.match.params.id);
    }

    componentDidMount() {
        this.fetchData(this.props.match.params.id);
    }
}