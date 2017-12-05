import Api from './api';


let api = new Api();
api.posts().then(data=>{
    console.log(data);
});

