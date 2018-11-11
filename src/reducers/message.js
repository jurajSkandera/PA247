

const message = (state = {counter : 0, disable_up: false, disable_down: false, no_vote : true}, action) => {
    switch (action.type) {
        case 'DOWNVOTE':
            return{
                ...state,
                        disable_down: state.no_vote,
                        disable_up: false,
                        counter : state.counter - 1,
                        no_vote : state.disable_up === true,
                    }
        case 'UPVOTE':
            return{
                ...state,
                disable_up : state.no_vote,
                disable_down : false,
                counter : state.counter + 1,
                no_vote: state.disable_down === true,
            }

        default:
            return state
    }
}

export default message