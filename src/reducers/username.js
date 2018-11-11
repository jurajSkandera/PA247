
const username = (state = { avatar_clicked : false}, action) => {
    switch (action.type) {
        case 'USERNAME_ENTER':
            return {
                ...state,
                username_clicked: true,
            }
        case 'USERNAME_CHANGE':
            return {
                ...state,
                username_clicked: false,
            }
        case 'EDIT_USERNAME':
            return{
                ...state,
                username: action.payload.value,
            }
        default:
            return state
    }
}

export default username