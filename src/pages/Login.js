import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { LOG_IN,GET_USER} from '../redux/login.redux';
import {Button} from 'antd-mobile';
@connect(
	state=> state.Loger,
	{ LOG_IN,GET_USER }
)
class Login extends Component{
	componentDidMount(){
		this.props.GET_USER()
	}
	render(){
		const { isLog, LOG_IN, username, age}  = this.props;
		return (
			<div>
				{isLog? <Redirect to="/dashbord" /> : null}
				{username} 今年 {age}岁
				<Button onClick={LOG_IN}>登陆</Button>
			</div>
		)
	}
}
export default Login