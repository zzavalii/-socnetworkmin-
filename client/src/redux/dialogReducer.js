const ADD_MSG = 'ADD_MSG';
const NEW_MSG_TEXT = 'NEW_MSG_TEXT';

let initialState = {
    dialogs: [
        {id:0, name: "Vlados"},
        {id:1, name: "Sergiy"},
        {id:2, name: "Jeka"},
],
    messages: [
        {id:0, content: "Zdarov Vlados", author: "Sergiy" },
        {id:1, content: "Hi", author: "Vlados" }
        ],
    newMsgText: ""
}


const dialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_MSG_TEXT: 
        return{
            ...state,
            newMsgText: action.text
        }

        case ADD_MSG: 
        let msg = {
            id: state.messages.length,
            content: state.newMsgText,
            author: "Vlados"
        }
       return{
           ...state,
           messages: [...state.messages, msg]       
        }

        default: 
        return state;
    }
}

export default dialogReducer;


export const addMsgActionCreator = () => {
    return {type: ADD_MSG}
}

export const newMsgTextActionCreator = (text) => {
    return {type: NEW_MSG_TEXT, text: text}
}