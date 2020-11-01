import React from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Details from './pages/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Register from './pages/Register'

const App = () => {
  return (<div>
      <Header />
      <Router>
        <Switch>
          <Route path="/item/:id" exact component={Details}/>
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={Home} />

        </Switch>
      </Router>
      <Footer />
      </div>

  );
}

export default App;
