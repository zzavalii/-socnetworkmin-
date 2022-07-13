import {connect} from 'react-redux';
import {login} from '../../../redux/authReducer'
import classes from './LoginForm.module.css'

const LoginForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        props.login(data.login, data.password);

    }

    return(
        <div className={classes.loginform}>
        <form className={classes.a} onSubmit={handleSubmit}>
         <input type="text" className={classes.o} name="login" placeholder="login" />
         <input type="text" className={classes.o} name="password" placeholder="password" />
         <div className={classes.submit}>
         <input className={classes.btn} type="submit"/>
         </div>
         
         </form>
          </div>
    )
}
export default connect(null,{login}) (LoginForm);
