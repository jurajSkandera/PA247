import * as types from '../constants/ActionTypes'

export const downvote = (message) => ({
    type: types.DOWNVOTE,
    message,
})

export const upvote = (message) => ({
    type : types.UPVOTE,
    message,
})