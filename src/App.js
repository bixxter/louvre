import React, { Component } from 'react';
import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom';
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
    console.log(this.props);
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <HashRouter basename="/"> */}
        <div className="App">
          <Header />
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={Gallery} />
              <Route exact path="/welcome" component={Intro} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/post/:id" component={PostDetails} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/create" component={CreatePost} />
              <Route exact path="/userprofile" component={Profile} />
            </Switch>
          </main>
          <Footer />
        </div>
        {/* </HashRouter> */}
      </BrowserRouter>
    );
  }
}

export default App;
