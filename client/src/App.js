import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };

  }
  callAPI() {
    fest("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }));
    .catch(err => err);
  }

  componenentWillMount() {
    this.callAPI();
  }

  return (
    <div className="App">
      <p className="App-intro">;{this.state.apiResponse}</p>
    </div>
  );
}

export default App;
