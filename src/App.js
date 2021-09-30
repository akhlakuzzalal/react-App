import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Restaurent from './Components/Restaurent/Restaurent';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="/restaurent">
            <Restaurent></Restaurent>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/about/:id">
            <About></About>
          </Route>
          <Route path="*">
            <About></About>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
