const baseUrl = 'https://wpmeetup-profreelancer.c9users.io/wp-json/wp/v2/';

export default class Api {

    posts() {
        let url = `${baseUrl}posts`;
        return fetch(url).then(res => res.json());
    }
}