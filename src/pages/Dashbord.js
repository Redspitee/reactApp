import React,{Component} from 'react';
import App from '../App';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import {LOG_OUT} from '../redux/login.redux'
import { Button } from 'antd'; 
@connect(
	state => state.Loger,
	{LOG_OUT}
)
class Dashbord extends Component{
	render(){
		const {isLog, LOG_OUT} = this.props;
		return (
			<div>
				{!isLog ? <Redirect to="/login"></Redirect> : null}
				<App />
				<Button onClick={LOG_OUT}>退出登陆</Button>
			</div>
		)
	}
}
export default Dashbord