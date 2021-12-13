import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Shopping from './containers/Shopping/Shopping';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/account" render={() => <h1>this is account!</h1>} />
            <Route path="/" exact component={Shopping} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App;
