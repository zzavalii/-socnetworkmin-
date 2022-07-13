import classes from './Messages.module.css'
const Messages = (props) => {

    let msg = props.messages.map(m => <li className={classes.content}><div className={classes.message}>{m.content} | {m.author}</div></li>)

    let onTextChange = (e) => {
        props.changeText(e.target.value);
       
    }

    let onSendClick = () => {
        props.sendMsg();
    }

    return (
        <div>
            <div className={classes.con}>
            <ul>
                {msg}
            </ul>
            </div>
            <div className={classes.inputs}>
            <input className={classes.text} type="text" value={props.newMsgText} onChange={onTextChange}/>
            <button className={classes.btn} onClick={onSendClick}>Send</button>
            </div>
        </div>
    )
}

export default Messages;