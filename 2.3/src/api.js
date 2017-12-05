// refactor the code to be able make sure that the post have an id
// capable to get a single post instead of all posts
const baseUrl = 'https://wpmeetup-profreelancer.c9users.io/wp-json/wp/v2/';

export default class Api {

    posts(id) {
        let url = `${baseUrl}posts`;

        // check if id is not undefined 
        // add the id in the url
        if (id !== undefined) {
            url += `/${id}`;
        }
        
        return fetch(url).then(res => res.json());
    }
}