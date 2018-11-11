import uuidv1 from "uuid/v1";


const messageForm = (state = { message : ''}, action) => {
    switch (action.type) {
        case 'HANDLE_INPUT':
            return {
                ...state,
                message : action.payload.value,
            }
        case 'DELETE_BUFFER':
            return{
                ...state,
                messages : ' ',
            }
        default:
            return state
    }
}

export default messageForm