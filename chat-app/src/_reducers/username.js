const initialState = 'unknown'

export default function username ( state = initialState, action){
    if (action.type === 'SET_USERNAME'){
        return [
            action.payload
        ]
    }
    return state;
}