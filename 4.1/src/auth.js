import React from 'react'; // we need react
import {Route, Redirect, Link} from 'react-router-dom'; // and we need react router.

let _isAuthenticated = false;

// auth method that can authenticate, signout and check if user is authenticated
const auth = {
    get isAuthenticated() {
        return _isAuthenticated;
    },
    authenticate(fn) {
        _isAuthenticated = true;
        setTimeout(fn, 100);
    },
    signout(fn) {
        _isAuthenticated = false;
        setTimeout(fn, 100);
    }
};


// a login link
function LoginLink(props) {
    return auth.isAuthenticated ? null : <li><Link to="/login">Login</Link></li>;
}

// login form component
class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            redirectTo: false
        };

        this.login = this.login.bind(this);
    }

    // login method
    login() {
        auth.authenticate(() => {
            this.setState({redirectTo: true});
        })
    }
    // render method that will redirect to root if auth is not authenticated or 
    // render the html instead.
    render() {
        if (this.state.redirectTo) {
            return <Redirect to="/" />;
        }

        return (
            <div className="row">
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn-default" onClick={this.login}>Login</button>
            </div>
        );
    }
}
// a delete post method, check if user is authenticated to proceed.
function DeletePost(props) {
    if (auth.isAuthenticated) {
        return <Link to={`/post/delete/${props.id}`}>Delete Post</Link>;
    } 
    
    return null;
    
}

// export the methods to be used.
export {auth, LoginLink, LoginForm, DeletePost};