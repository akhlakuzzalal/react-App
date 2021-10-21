import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Restaurent from './Components/Restaurent/Restaurent';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import { Page } from './Components/page/Page';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home"
            render={props => (
              <Page {...props} component={Home} title="Familly Shop" />
            )}>
          </Route>
          <Route exact path="/about"
            render={props => (
              <Page {...props} component={About} title="About Page" />
            )}>
          </Route>
          <Route path="/restaurent"
            render={props => (
              <Page {...props} component={Restaurent} title="Restaurent" />
            )}>
          </Route>
          <Route path="/shop"
            render={props => (
              <Page {...props} component={Shop} title="Shop" />
            )}>
          </Route>
          <Route path="/about/:id"
            render={props => (
              <Page {...props} component={About} title="About Page" />
            )}>
          </Route>
          <Route path="*"
            render={props => (
              <Page {...props} component={Home} title="Familly Shop" />
            )}>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
