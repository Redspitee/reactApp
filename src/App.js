import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button,Result ,WhiteSpace,WingBlank} from 'antd-mobile';
import { ADD_ACTION, REMOVE_ACTION, ADD_ASYNC_ACTION } from './redux/dashbord.redux';

@connect(
  state => state,
  {ADD_ACTION,REMOVE_ACTION,ADD_ASYNC_ACTION}
)
class App extends Component {
  render() {
    const {Numer,ADD_ACTION,REMOVE_ACTION,ADD_ASYNC_ACTION} = this.props;
    return (
      <WingBlank className="App">
        <WhiteSpace />
        <Result
          img={<img src={require('./whale.png')} alt="" />}
          title={Numer}
          message="num值"
        />
        <WhiteSpace />

        <Button inline={true} onClick={ADD_ACTION}>num+1</Button>
        <Button inline={true} onClick={REMOVE_ACTION}>num-1</Button>
        <Button inline={true} onClick={ADD_ASYNC_ACTION}>隔两秒num+1</Button>
        <WhiteSpace />
      </WingBlank>
    );
  }
}

export default App;
