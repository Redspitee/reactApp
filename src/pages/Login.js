import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { LOG_IN,GET_USER} from '../redux/login.redux';
import {Button,WhiteSpace,WingBlank,Card} from 'antd-mobile';
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
		const now = (new Date()).toLocaleString()
		return (
			<WingBlank>
				<WhiteSpace />
				{isLog? <Redirect to="/dashbord" /> : null}
				<Card>
					<Card.Header 
						title={username}
						thumb={require('../whale.png')}
						extra={`${age}岁`}
					/>
					<Card.Body>
						现在是 {now}
					</Card.Body>
				</Card>
				<WhiteSpace />
				<Button onClick={LOG_IN}>登陆</Button>
			</WingBlank>
		)
	}
}
export default Login