export default function messagesList ( state = [], action){
    if (action.type === 'SEND_MESSAGE'){
        return [
            ...state
        ];
    } else if (action.type === 'GET_MESSAGES'){
        return [
            ...action.payload
        ]
    }
    return state;
}