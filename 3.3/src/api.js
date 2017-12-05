const baseUrl = 'https://wpmeetup-profreelancer.c9users.io/wp-json/wp/v2/';

export default class Api {
    // refactoring posts method by replacing a parameter of options (array) instead of
    // single id parameter. 
    posts(options = {}) {
        let url = `${baseUrl}posts`;

        // you will noticed that instead of parameter id
        // we have options.id , since options can have many objects.
        if (options.id !== undefined) {
            url += `/${options.id}`;
        }

        url += '?_embed';

        // check if have a category if undefined then 
        // add in the url categories with the options of category that can have many cateogry.
        if (options.category !== undefined) {
            url += `&categories=${options.category}`;
        }
        
        return fetch(url).then(res => res.json());
    }

    categories() {
        let url = `${baseUrl}categories`;

        // if (id !== undefined) {
        //     url += `/${id}`;
        // }
        
        return fetch(url).then(res => res.json());
    }
}