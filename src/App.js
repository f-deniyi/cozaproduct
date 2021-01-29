import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ProductReview from './components/ProductReview';
import Product from './components/Products';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import VerifyTransaction from './components/VerifyTransaction';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Product} />
          <Route exact path="/product/:productId/:userId" component={ProductReview} />
          <Route exact path="/transaction/:transactionId" component={VerifyTransaction} />
        </Switch>
        <ToastContainer />
      </Router >
    </React.Fragment>

  );
}

export default App;
