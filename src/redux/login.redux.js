import axios from 'axios';

const LOGIN = 'login';
const LOGOUT = 'logout';
const GETUSER =  'getuser';
const initState = {
	isLog: false,
	username: 0,
	age: 0
}
// 登陆状态reducer
export const Loger = (state = initState,action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isLog: true
			}
		case LOGOUT:
			return {
				...state,
				isLog: false
			}
		case GETUSER:
		return{
			...state,
			username: action.payload.username,
			age: action.payload.age
		}
		default:
			return state
	}
}
//action Creators
export const LOG_IN = ()=>{
	return {type: LOGIN}
} 
export const LOG_OUT = ()=>{
	return {type: LOGOUT}
} 
export const GET_USER = ()=>{
	return dispatch => {
		axios.get('/user').then(res=>{
			if(res.status === 200) {
				dispatch({
					type: GETUSER,
					payload: res.data
				})
			}
		})
	}
} 
