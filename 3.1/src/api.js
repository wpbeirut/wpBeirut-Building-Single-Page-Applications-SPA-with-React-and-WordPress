const baseUrl = 'https://wpmeetup-profreelancer.c9users.io/wp-json/wp/v2/';

export default class Api {

    posts(id) {
        let url = `${baseUrl}posts`;

        if (id !== undefined) {
            url += `/${id}`;
        }

        // adding on the url the embed parameter to retrieve extra information about the post
        url += '?_embed';
        
        return fetch(url).then(res => res.json());
    }
}