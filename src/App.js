import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { ADD_ACTION, REMOVE_ACTION, ADD_ASYNC_ACTION } from './redux/dashbord.redux';

@connect(
  state => state,
  {ADD_ACTION,REMOVE_ACTION,ADD_ASYNC_ACTION}
)
class App extends Component {
  render() {
    const {Numer,ADD_ACTION,REMOVE_ACTION,ADD_ASYNC_ACTION} = this.props;
    return (
      <div className="App">
        {Numer}
        <Button onClick={ADD_ACTION}>num+1</Button>
        <Button onClick={REMOVE_ACTION}>num-1</Button>
        <Button onClick={ADD_ASYNC_ACTION}>隔两秒num+1</Button>
      </div>
    );
  }
}

export default App;
