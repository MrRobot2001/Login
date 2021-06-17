import {DeleteData} from '../actions/globalTypes'
import {PROFILE_TYPES} from '../actions/profileAction'
const initialState = {
    profiles: []
}

const profileReducer = (state=initialState,action) => {
    switch(action.type) {
        case PROFILE_TYPES.CREATE_PROFILE:
            return {
                ...state,
                profiles: [action.payload,...state.profiles]
            };
        case PROFILE_TYPES.GET_PROFILES:
            return {
                ...state,
                profiles: action.payload.profiles
            }
        case PROFILE_TYPES.DELETE_PROFILE:
            return{
                ...state,
                profiles: DeleteData(state.profiles, action.payload._id)
            }
        default:
            return state;
    }
}

export default profileReducer