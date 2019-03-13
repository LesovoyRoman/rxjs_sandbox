import React, { Component } from 'react';
import CustomFunctions from './functions'

class App extends Component {
  constructor(props) {
      super(props)

      this.elemClick = {};
      this.elemMouseOver = {};
  }

  componentDidMount() {
      CustomFunctions.rxObserveArray([5, 11, 103]);
      CustomFunctions.rxAddListener(this.elemClick, 'click')
      CustomFunctions.rxAddListener(this.elemMouseOver, 'mouseover')
  }

  render() {
      return (
          <div className="App">
              <button ref={(elem) => this.elemClick = elem}>Click</button>
              <button ref={(elem) => this.elemMouseOver = elem}>Hover</button>
          </div>
      );
  }
}

export default App;
