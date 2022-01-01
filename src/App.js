import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Shopping from './containers/Shopping/Shopping';
import Checkout from './containers/Checkout/Checkout';
import Account from './containers/Account/Account';
class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/account" component={Account}/>
            <Route path="/" exact component={Shopping} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App;
