import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './components/auth/Profile';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Gallery from './components/main/Gallery';
import CreatePost from './components/posts/CreatePost';
import PostDetails from './components/posts/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/louvre/" component={Gallery} />
            <Route path="/louvre/post/:id" component={PostDetails} />
            <Route path="/louvre/signin" component={SignIn} />
            <Route path="/louvre/signup" component={SignUp} />
            <Route path="/louvre/create" component={CreatePost} />
            <Route path="/louvre/userprofile" component={Profile} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
