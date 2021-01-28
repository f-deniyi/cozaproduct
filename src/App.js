import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ProductReview from './components/ProductReview';
import Product from './components/Products';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Product} />
        <Route exact path="/product/:productId/:userId" component={ProductReview} />
      </Switch>
    </Router >
  );
}

export default App;
