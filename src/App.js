import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './components/auth/Profile';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Gallery from './components/main/Gallery';
import Users from './components/main/Users';
import CreatePost from './components/posts/CreatePost';
import PostDetails from './components/posts/PostDetails';
import M from 'materialize-css/dist/js/materialize.min.js';
import Intro from './components/main/Intro';

class App extends Component {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={Gallery} />
              <Route exact path="/louvre/" component={Gallery} />
              <Route exact path="/louvre/welcome" component={Intro} />
              <Route exact path="/louvre/users" component={Users} />
              <Route exact path="/post/:id" component={PostDetails} />
              <Route exact path="/louvre/signin" component={SignIn} />
              <Route exact path="/louvre/signup" component={SignUp} />
              <Route exact path="/louvre/create" component={CreatePost} />
              <Route exact path="/louvre/userprofile" component={Profile} />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
