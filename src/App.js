import React , { Component } from 'react';
import Layout from './components/Layout/Layout'
import Shopping from './containers/Shopping/Shopping';
import { BrowserRouter as Router } from 'react-router-dom'
import Modal from './components/UI/modal/Modal';

class App extends Component{
  render(){
    return(
      <Router>
        <Layout>
          <Shopping />
        </Layout>
      </Router>
    )
  }
}

export default App;
