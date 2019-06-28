import * as Firebase from 'firebase/app';

export const asyncAddMessage = store => next => action => {
    if (action.type === 'SEND_MESSAGE') {
        Firebase.database().ref('messages').push({ text: action.payload, user: action.user });
        let data = { type: action.type, payload: { text: action.payload, user: action.user } };
        next(data);
    } else if (action.type === 'GET_MESSAGES') {
        let messages = [];
        Object.keys(action.payload).forEach(key => {
            messages.push(action.payload[key]);
        })
        action.payload = messages;
        next(action);
    } else if (action.type === 'SET_USERNAME') {
        next(action);
    } else if (action.type === 'USER_LOGOUT'){
        next(action);
    }
}

export const GetMessages = () => dispatch => {
    setTimeout(() => {
        dispatch({ type: 'GET_MESSAGES', payload: [] });
    }, 0)
}