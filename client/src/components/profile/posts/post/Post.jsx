import { addLikeActionCreator } from '../../../../redux/postReducer';
import classes from './Post.module.css';

const Post = (props) => {

  const addLike = () =>{
   props.addLike(props.id);
  }    
        return (
         <div className={classes.Post}> 
            <img className={classes.prof} src='https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'></img>
          <div className={classes.block}>
          <p>{props.text}</p>
          
          </div><div className={classes.statistic}>
             <span className={classes.like}>{props.likes}</span>
            <button onClick={addLike}>👍🏿</button>
          </div>
            
        </div>
        );
}

export default Post;