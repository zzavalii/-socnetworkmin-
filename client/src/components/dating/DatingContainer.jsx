import { connect } from 'react-redux'; 
import Dating from './Dating'; 
import { setDatingActionCreator, getUsersThunkCreator } from './../../redux/datingReducer'; 
import { Component } from 'react'; 
 
let mapStateToProps = (state) => { 
    return { 
        users: state.datingState.users 
    } 
} 
 
let mapDispatchToProps = (dispatch) => { 
    return { 
        date: (id) => { dispatch(setDatingActionCreator(id, true)) }, 
        unDate: (id) => { dispatch(setDatingActionCreator(id, false)) }, 
        fetchData: () => { dispatch(getUsersThunkCreator()) }  
    } 
} 
 
class DatingContainer extends Component { 
 
    componentDidMount() { 
        this.props.fetchData(); 
    } 
 
    render() { 
        return <Dating {...this.props} /> 
    } 
}  
 
export default connect(mapStateToProps,mapDispatchToProps)(DatingContainer);