import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { LOG_IN } from '../redux/login.redux';
import {Button} from 'antd';
@connect(
	state=>state.Loger,
	{ LOG_IN }
)
class Login extends Component{
	render(){
		const { isLog ,LOG_IN}  = this.props;
		return (
			<div>
				{isLog? <Redirect to="/"></Redirect> : null}
				<Button onClick={LOG_IN}>登陆</Button>
			</div>
		)
	}
}
export default Login