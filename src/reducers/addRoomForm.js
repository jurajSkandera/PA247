
const addRoomForm = (state = { room : ''}, action) => {
    switch (action.type) {
        case 'HANDLE_INPUT_ROOM':
            return {
                ...state,
                room : action.payload.value,
            }
        case 'DELETE_BUFFER_ROOM':
            return{
                ...state,
                messages : '',
            }
        default:
            return state
    }
}

export default addRoomForm