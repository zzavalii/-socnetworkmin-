import classes from './DialogList.module.css'

const DialogList = (props) => {
    let dl = props.dialogs.map(d => <li className={classes.item}>{d.name}</li>) 

    return (
        <div className={classes.dialog_list}>
            <ul>
              <div className={classes.all}>{dl}</div> 
            </ul>
        </div>
    )
}

export default DialogList;