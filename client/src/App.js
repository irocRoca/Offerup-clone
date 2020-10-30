import Container from './components/Container';
import Header from './components/Header'
import Home from './pages/Home'
import Details from './pages/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (<>
      <Header />
      <Router>
        <Switch>
          <Route to="/item/:id" component={Details} exact/>
          <Route to="/" component={Home} exact />
        </Switch>
      </Router>
      </>

  );
}

export default App;
