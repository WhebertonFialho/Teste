const INITIAL_STATE = {description: '', list: []}

export default function(state = INITIAL_STATE, action){
    switch(action.type) {
        case 'USUARIO_FETCHED':
        return { ...state, list: action.payload.data }
        case 'DESCRIPTION_USUARIO_CHANGED':
            return { ...state, description: action.payload }
        case 'USUARIO_SEARCHED':
            return { ...state, list: action.payload }
        case 'USUARIO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}