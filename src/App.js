import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import store from './redux/store'
import VerifyTransaction from './components/VerifyTransaction';
import { Provider } from 'react-redux';
import ProductStore from './view/productStore';



function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/:productId/:userId" component={ProductStore} />
            <Route exact path="/transaction/:flwRef/:userId/:productId" component={VerifyTransaction} />
          </Switch>
        </Router >
      </Provider>
    </React.Fragment>

  );
}

export default App;
