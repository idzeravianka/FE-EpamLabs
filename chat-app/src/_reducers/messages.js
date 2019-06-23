const initialState = ['Hi', 'Hello']

export default function messagesList ( state = initialState, action){
    if (action.type === 'SEND_MESSAGE'){
        return [
            ...state,
            action.payload
        ];
    } 
    return state;
}