import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Details from './Components/Details/Details/Details';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="home">
          <Home/>
        </Route>
        <Route path="/articles/:id">
          <Details />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
