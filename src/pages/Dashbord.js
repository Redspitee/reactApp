import React,{Component} from 'react';
import App from '../App';
import { connect } from 'react-redux';
import {Redirect,Route} from 'react-router-dom'
import {LOG_OUT} from '../redux/login.redux'
import { Button, WingBlank, NavBar} from 'antd-mobile'; 

function Zxy(){
	return <h2>Zxy</h2>
}
@connect(
	state => state.Loger,
	{LOG_OUT}
)

class Dashbord extends Component{
	render(){
		const {isLog, LOG_OUT} = this.props;
		const match = this.props.match;
		const redirectToLogin =  <Redirect to="/login" />;
		const app =(
			<div>
				<NavBar	mode="light">{this.props.location.pathname} 路由</NavBar>

				<Route path={`${match.url}`} exact component={App}></Route>
				<Route path={`${match.url}/zxy`} component={Zxy}></Route>
				<WingBlank>
					{isLog ? <Button onClick={LOG_OUT}>退出登陆</Button>:null}
				</WingBlank>
			</div>
		)
		return isLog? app:redirectToLogin;
	}
}
export default Dashbord