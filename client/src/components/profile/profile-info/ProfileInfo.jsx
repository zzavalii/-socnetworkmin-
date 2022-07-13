import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className="ooo">
        <div className={classes.profile}>
        <img className={classes.cat} src='https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'></img>
       <div className={classes.about}>
        <h2>Vlad Zavalii</h2>
        <p>Age: 16</p> 
        <p>City: Kyiv, Ukraine</p>
        <p>About me: I like sport so much.
        2 years of tennis and 7 years of karate </p>
        </div>
        </div>
        </div>
    );
}

export default ProfileInfo;
