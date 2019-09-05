import React, {Component} from "react";
import ReactDOM from "react-dom";

import PageWrapper from './components/PageWrapper'
import Home from './components/pages/Home'

class App extends Component {
  render(){
    return (
        <PageWrapper>
          <Home/>
        </PageWrapper>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
