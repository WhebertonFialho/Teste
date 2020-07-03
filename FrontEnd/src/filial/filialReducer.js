const INITIAL_STATE = { description: '', list: []}

export default function(state = INITIAL_STATE, action){
    switch(action.type) {
        case 'FILIAL_FETCHED':
            return { ...state, list: action.payload.data }
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'FILIAL_SEARCHED':
            return { ...state, list: action.payload }
        case 'FILIAL_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}