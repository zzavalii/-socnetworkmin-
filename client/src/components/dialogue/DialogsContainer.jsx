import { connect } from "react-redux";
import { addMsgActionCreator, newMsgTextActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return{
    state: state.dialogState
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
    sendMsg: () => {dispatch(addMsgActionCreator())},   
    changeText: (text) => {dispatch(newMsgTextActionCreator(text))}
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;