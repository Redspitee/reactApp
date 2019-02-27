import Axios from "axios";

const LOGIN = 'login';
const LOGOUT = 'logout';
const GETUSER =  'getuser';
// 登陆状态reducer
export const Loger = (state = { isLog: false, username: "zxy" },action) => {
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
			...action.payload
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
		Axios.get('/user').then(res=>{
			dispatch({
				type: GETUSER,
				payload:{
					data: res.data
				}
			})
		})
	}
} 
