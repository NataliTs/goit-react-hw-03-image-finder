import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <div>Start</div>
      </Layout>
    );
  }
}
