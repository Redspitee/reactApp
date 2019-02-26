import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { ADD_ACTION, REMOVE_ACTION, ADD_ASYNC_ACTION } from './index.redux';
@connect(
  state => ({ num: state }),
  {ADD_ACTION,REMOVE_ACTION,ADD_ASYNC_ACTION}
)
class App extends Component {
  render() {
    return (
      <div className="App">
       {this.props.num}
        <Button onClick={this.props.ADD_ACTION}>num+1</Button>
      </div>
    );
  }
}

export default App;
