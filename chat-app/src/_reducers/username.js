const initialState = 'unknown'

export default function username ( state = initialState, action){
    if (action.type === 'SET_USERNAME'){
        return [
            action.payload
        ]
    } else if (action.type === 'USER_LOGOUT'){
        return [
            action.payload
        ]
    }
    return state;
}