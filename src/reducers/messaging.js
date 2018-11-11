import uuidv1 from "uuid/v1";


const messaging = (state = { messages : []}, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            const messages = state.messages
            const id_mess = uuidv1()
            const new_message = {userid : this.state.user_id, value : action.payload, up_flag : 0, down_flag : 0, counter : 0, mess_id : id_mess}
            messages.push(new_message)
            return {
                ...state,
                messages : messages,
            }
        case 'DELETE_MESSAGE':
            var messages_2 = state.messages
            const message_index=state.messages.findIndex((e) => e.mess_id === action.payload.mess_id)
            messages_2.splice(message_index, 1)

            return{
                ...state,
                messages : messages_2,
            }
        default:
            return state
    }
}

export default messaging