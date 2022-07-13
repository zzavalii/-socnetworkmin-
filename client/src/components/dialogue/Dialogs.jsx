import classes from './Dialogs.module.css'
import DialogList from './dialog_list/DialogList';
import Messages from './messages/Messages';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <DialogList dialogs={props.state.dialogs}/>
            <Messages className={classes.message} messages={props.state.messages} sendMsg={props.sendMsg} changeText={props.changeText} newMsgText={props.state.newMsgText}/>
        </div>
    ) 
}

export default Dialogs;