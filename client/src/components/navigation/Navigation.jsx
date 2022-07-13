import classes from './Navigation.module.css';
import  {NavLink} from "react-router-dom"
const Navigation = () => {
    return (
        <nav>
        <img className={classes.pic} src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Inkscape_logo_%282-colour%29.svg" alt="pic" />

           <div className={classes.con}>

               <div className={classes.block}>
                  <li><NavLink to="/profile">Profile</NavLink> </li>
                  <li><NavLink to="/dialogue">Dialogues</NavLink> </li>
                  <li><NavLink to="/dating">Dating</NavLink> </li>
                  <li><NavLink to="/likes">Likes</NavLink> </li>
               </div>

                <div className="block1">
                  <li className={classes.set}><NavLink to="settings">Settings ⚙</NavLink> </li>
                </div>
           </div>
        </nav>
    );
   
}

export default Navigation;