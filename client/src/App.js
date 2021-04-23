import React, { Component } from 'react';
import GithubFork from './components/GithubForkComponent.js'
import './App.css';

class App extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
        <div className="Apology">
          <div className="Message"><h1>{this.state.data.message}</h1></div>
          <div className="Author"><a href={"https://github.com/" + this.state.data.author} rel="noopener noreferrer" target="_blank">@{this.state.data.author}</a></div>
        </div>
        <div id="background" style={{opacity: 1, zIndex: -1, backgroundImage: `url(` + this.state.data.gif + `)`}}></div>
        <GithubFork url="https://github.com/clement-avenel/not-late"/>
     </div>
    );
  }
}

export default App;
