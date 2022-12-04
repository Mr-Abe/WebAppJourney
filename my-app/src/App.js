import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <><div className="App">
        <h1>My React App</h1>
      </div><div className="button_container" onClick={this.handleClick}>
          <button className="button">Click Here</button>
        </div></>
    )
  }
}
export default App
