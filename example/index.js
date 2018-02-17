import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NumericInput from 'reason-react-rollup-starter-kit';

class App extends Component {
  render() {
    return (
      <div>
        <NumericInput
          value="12725577"
        />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('#app'));
