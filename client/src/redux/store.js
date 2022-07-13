import postReducer from './postReducer';

let store = {

_notifySubscriber() {
    console.log('no subscriber')
},

subscribe(subscriber) {
    this._notifySubscriber = subscriber;
},

_state: {
    postState: {
        posts: [
            {id:0, text:"Hello, my dear friend!", likes: 5},
            {id:1, text:"Hello, How are You?", likes: 10},
            {id:2, text:"Wow", likes: 0}
        ],
        newPostText: ""
    },
    dialogState: {
        dialogs: [],
        messanges: [],
        newMessageTexs:""
    }
},

getState() {
    return this._state;
},

dispatch(action) {     
    this._state.postState = postReducer(this._state.postState, action);
    this._notifySubscriber();
}
}

export default store;
