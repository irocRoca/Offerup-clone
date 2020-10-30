import Header from './components/Header'
import Home from './pages/Home'
import Details from './pages/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer';

function App() {

  return (<>
      <Header />
      <Router>
        <Switch>
          <Route path="/item/:id" exact component={Details}/>
          <Route path="/" exact component={Home} />

        </Switch>
      </Router>
      <Footer />
      </>

  );
}

export default App;
