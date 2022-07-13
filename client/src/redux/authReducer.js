import axios from "axios";
const SET_CREDENTIONALS = 'SET_CREDENTIONALS';

let initialState = {
    id: '',
    token: '',
    isAuthenticated: false
}

export const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_CREDENTIONALS:
        return{
            ...state,
            ...action.data,
            isAuthenticated: true
        }
        default:
            return state;
  }
}

const setCredentionals = data => ({type: SET_CREDENTIONALS, data});

export const register = (data) => {
    return (dispatch) => {
     axios.post("http://localhost:5000/auth/register", {...data})
      .then();
    }
}

export const login = (login, password) => {
    return (dispatch) => {
     axios.post("http://localhost:5000/auth/login", {login, password})
      .then((data)=>{
       axios.defaults.headers.common['Autorization']="Bearer" + data.data.token;
        dispatch(setCredentionals(data.data));
    });
}
}

