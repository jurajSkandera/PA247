import uuidv1 from "uuid/v1";

const avatar = (state = { avatar_clicked : false}, action) => {
    switch (action.type) {
        case 'AVATAR_ENTER':
            return {
                ...state,
                avatar_clicked: true,
            }
        case 'CHANGE_AVATAR':
            return{
                ...state,
                avatar_clicked: false,
            }
        default:
            return state
    }
}

export default avatar

