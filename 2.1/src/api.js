/*
* this file was created to retrive information from a base url
* the base url is the url taht get all posts from wordpress api.
*/
// base url
const baseUrl = 'https://wpmeetup-profreelancer.c9users.io/wp-json/wp/v2/';

// creating a class called APi that will fecth the posts and return json
export default class Api {

    posts() {
        // set the url to fetch the posts by  concatinating the baseurl with posts get call
        let url = `${baseUrl}posts`;
        // return the json results.
        return fetch(url).then(res => res.json());
    }
}