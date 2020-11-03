import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>HATS pages</h1>
  </div>
)


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
        {/* <HomePage /> */}
      </Switch>
    </div>
  );
}

export default App;
