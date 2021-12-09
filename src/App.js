import React , { Component } from 'react';
import Wrapper from './hoc/Wrapper'
import Layout from './components/Layout/Layout'
import Shopping from './containers/Shopping/Shopping';

class App extends Component{
  render(){
    return(
      <Wrapper>
        <Layout>
          <Shopping />
        </Layout>
      </Wrapper>
    )
  }
}

export default App;
