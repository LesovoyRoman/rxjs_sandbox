import React, { Component } from 'react';
import CustomFunctions from './functions'

class App extends Component {
  constructor(props) {
      super(props)

      this.observered = {};
      this.observer = {};

      this.subjectObservered = {};

      this.elemClick = {};
      this.elemMouseOver = {};
  }

  setObserver() {
      this.observered = CustomFunctions.rxObserver(
          (observer) => {
              this.observer = observer
              //this.observer.complete()
          }
      );
      this.observered.data = [];
      this.observered
          .subscribe({
              next: val => {this.observered.data.push(val); console.log('observer val => ', val)},
              error: err => console.error('something wrong occurred: ' + err),
              complete: () => console.log('done', this.observered.data),
          });
  }

  setListeners() {
      CustomFunctions.rxAddListener(this.elemClick, 'click')
      CustomFunctions.rxAddListener(this.elemMouseOver, 'mouseover')
  }

  setSubject() {
      this.subjectObservered = CustomFunctions.rxAddSubject();
      this.subjectObservered.data = [];
      this.subjectObservered.subscribe({
          next: val => {this.subjectObservered.data.push(val); console.log('subject observer val => ', val)}
      });
  }

  componentDidMount() {
      this.setObserver();
      this.setListeners();
      this.setSubject();
  }

  consoleData = (data) => console.log('observer data => ', data);

  render() {
      return (
          <div className="App">
              <button ref={(elem) => this.elemClick = elem}>Click</button>
              <button ref={(elem) => this.elemMouseOver = elem}>Hover</button>
              <button onClick={() => {this.observer.next(Math.random() * 10); this.consoleData(this.observered.data) }}>Add to observer data</button>
              <button onClick={() => {this.subjectObservered.next(Math.random() * 10); this.consoleData(this.subjectObservered.data) }}>Add to subject observer data</button>
          </div>
      );
  }
}

export default App;
