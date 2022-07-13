import {connect} from "react-redux";
import { addLikeActionCreator, addPostActionCreator, newPostTextActionCreator } from "../../../redux/postReducer";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return{
      posts: state.postState.posts,
      newPostText: state.postState.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {dispatch(addPostActionCreator())},
        textChanged: (text) => {dispatch(newPostTextActionCreator(text))},
        addLike: (id) => {dispatch(addLikeActionCreator(id))}
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostsContainer;