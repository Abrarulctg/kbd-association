import './App.css';
import Header from './Compunents/Header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Compunents/Home/Home';
import About from './Compunents/About/About';
import Footer from './Compunents/Footer/Footer';
import NotFound from './Compunents/NotFound/NotFound';
import Blog from './Compunents/Blog/Blog';
import Contact from './Compunents/Contact/Contact';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
          {/* <PrivateRoute path="/login">
              <Login></Login>
            </PrivateRoute> */}
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
