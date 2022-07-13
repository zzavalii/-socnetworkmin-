import classes from './Posts.module.css';
import Post from './post/Post'
import React from 'react';
const Posts = (props) => { 
   let posts = props.posts.map(post => <Post key={post.id} id={post.id} text = {post.text} likes = {post.likes} addLike={props.addLike}/>);


   let addPost = (e) => {
       props.addPost();
   }

   let textChanged = (e) =>{
      props.textChanged(e.target.value);
   }

    return ( 
       <div className={classes.posts}>
          <h1>My Posts</h1> 
          <input  type="text" className={classes.text}  value={props.newPostText} onChange={textChanged}placeholder='your news...'/>
          <input type="button" className={classes.btn} value="Send" onClick={addPost}/>
          <div className={classes.po}>
            {posts}
          </div>
       </div>
       
    );
}

export default Posts;

{/* <Post className = {classes.texts} text="Hello, my name is Vlad"/>
             <Post className = {classes.texts} text="Today and all week are the wors days((("/>
             <Post className = {classes.texts} text="Hi there"/>
             <Post className = {classes.texts} text=")"/> */}