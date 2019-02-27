import React,{Component} from 'react';
import App from '../App';
import { connect } from 'react-redux';
import {Redirect,Route,Link} from 'react-router-dom'
import {LOG_OUT} from '../redux/login.redux'
import { Button } from 'antd-mobile'; 

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
				{isLog ? <Button onClick={LOG_OUT}>退出登陆</Button>:null}
				<ul>
					<li>
						<Link to={`${match.url}`}>App</Link>
					</li>
					<li>
						<Link to={`${match.url}/zxy`} >zxy</Link>
					</li>
				</ul>
				<Route path={`${match.url}`} exact component={App}></Route>
				<Route path={`${match.url}/zxy`} component={Zxy}></Route>
			</div>
		)
		return isLog? app:redirectToLogin;
	}
}
export default Dashbord