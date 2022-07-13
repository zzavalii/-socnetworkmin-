import {connect} from 'react-redux';
import {register} from '../../../redux/authReducer'
import classes from './RegisterForm.module.css'

const RegisterForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        props.register(data);

    }

    return(
        <div className={classes.register}>
        <form className={classes.a} onSubmit={handleSubmit}>
         <input type="text" className={classes.o}name="login" placeholder="login" />
         <input type="text" className={classes.o}name="password" placeholder="password" />
         <input type="text" className={classes.o}name="name" placeholder="name" />
         <input type="text" className={classes.o}name="age" placeholder="age" />
         <input type="img" className={classes.o}name="img" placeholder="img" />
         <input type="text" className={classes.o}name="gender" placeholder="gender" />
         <div className={classes.submit}>
         <input className={classes.btn} type="submit"/>
         </div>
         </form>
          </div>
    )
}
export default connect(null,{register}) (RegisterForm);
