import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { LOG_IN,GET_USER} from '../redux/login.redux';
import {Button} from 'antd';
@connect(
	state=> state.Loger,
	{ LOG_IN,GET_USER }
)
class Login extends Component{
	componentDidMount(){
		this.props.GET_USER()
	}
	render(){
		console.log(this.props)
		const { isLog ,LOG_IN}  = this.props;
		return (
			<div>
				{isLog? <Redirect to="/dashbord" /> : null}
				<Button onClick={LOG_IN}>登陆</Button>
			</div>
		)
	}
}
export default Login