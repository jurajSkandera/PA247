import uuidv1 from "uuid/v1";

const app = (state = { currentRoomId : null,
    joinableRooms : [],
    username : 'User',
    room_counter : 0,
    user_id : 0,
    avatar : "https://i0.wp.com/tricksmaze.com/wp-content/uploads/2017/04/Stylish-Girls-Profile-Pictures-36.jpg?resize=300%2C300&ssl=1"}, action) => {
    switch (action.type) {
        case 'CHANGE_AVATAR':
            var reader = new FileReader();
            var that = this;
            var image = 0;
            reader.onload = function(r) {
                image = r.target.result
            }
            reader.readAsBinaryString(action.payload.target.files[0]);
            return {
                ...state,
                avatar: image,

            }
        case 'CHANGE_USERNAME':
            return {
                ...state,
                username: action.payload,
            }
        case 'ADD_ROOM':
            const new_room = {id: uuidv1(), name: action.payload, my_index: this.state.room_counter}
            return {
                ...state,
                room_counter: new_room.my_index + 1,
                currentRoomId: new_room.id,
                joinableRooms: [...state.joinableRooms, new_room],
            }
        case 'ENTER_ROOM':
            return {
                ...state,
                currentRoomId: action.payload,
            }
        default:
            return state
    }
}

export default app
