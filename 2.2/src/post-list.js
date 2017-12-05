import React from 'react'; // import react 
// set the function psot that will return a single post using props parameter
function Post(props) {
    // talk about dangerouslySetInnherHtml a property of react.
    return (
        <div className="row">
            <h3>{props.title.rendered}</h3>
            <div dangerouslySetInnerHTML={{__html: props.content.rendered}} />
        </div>
    );
}

// using the export method to set the postlist available to be used with parameter props by
// other react files.
export default function PostList(props) {
    let posts = props.posts.map((post, index) => <Post key={index} {...post} />);

    return (
        <div>{posts}</div>
    );
}