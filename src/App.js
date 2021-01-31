import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import store from './redux/store'
import Product from './components/Products';
// import VerifyTransaction from './components/VerifyTransaction';
import { Provider } from 'react-redux';
import Load from './components/Load';



function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/:productId/:userId" component={Product} />
            <Route exact path="/transaction" component={Load} />
          </Switch>
          <ToastContainer />
        </Router >
      </Provider>

    </React.Fragment>

  );
}

export default App;
