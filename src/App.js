import React, { Component } from 'react';
import CustomFunctions from './functions'

class App extends Component {
  constructor(props) {
      super(props)

      this.array = [5, 11, 103];
      this.observer = {};
      this.elemClick = {};
      this.elemMouseOver = {};
  }

  componentDidMount() {
      this.observer = CustomFunctions.rxObserveArray(
          function(observer) {
              observer.next(1)
              observer.next(2)
              observer.complete()
          }
      );
      this.observer.data = [];
      this.observer
          .subscribe({
              next: val => this.observer.data.push(val),
              error: err => console.error('something wrong occurred: ' + err),
              complete: () => console.log('done', this.observer.data),
          });

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
