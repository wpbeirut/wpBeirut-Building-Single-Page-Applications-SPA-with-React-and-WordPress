const baseUrl = 'https://wpmeetup-profreelancer.c9users.io/wp-json/wp/v2/';

export default class Api {

    posts(id) {
        let url = `${baseUrl}posts`;

        if (id !== undefined) {
            url += `/${id}`;
        }

        url += '?_embed';
        
        return fetch(url).then(res => res.json());
    }

    // method written to retrive categories as concatinating baseUrl with categories
    categories() {
        let url = `${baseUrl}categories`;

        // if (id !== undefined) {
        //     url += `/${id}`;
        // }
        
        return fetch(url).then(res => res.json());
    }
}