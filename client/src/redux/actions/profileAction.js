import {GLOBALTYPES} from './globalTypes';

import { postDataAPI,getDataAPI,deleteDataAPI } from '../../fetchData';
import valid from '../../valid2';

export const PROFILE_TYPES = {
    CREATE_PROFILE: 'CREATE_PROFILE',
    GET_PROFILES: 'GET_PROFILES',
    DELETE_PROFILE: 'DELETE_PROFILE'
}

export const save = ({profileData,auth}) => async (dispatch) => {
    const check = valid(profileData);
    if(check.errLength > 0)
    return dispatch({type : GLOBALTYPES.ALERT, payload: check.errMsg })
    try {
        const res = await postDataAPI('save', profileData, auth.token)
        dispatch({type: PROFILE_TYPES.CREATE_PROFILE, 
        payload: {proflie:res.data.profile}})

        dispatch({type: GLOBALTYPES.ALERT, 
        payload: {success: res.data.msg}})
    } catch (err) {
        dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
    }
}

export const getProfiles = (token) => async(dispatch) => {
    try {
        const res = await getDataAPI('profiles',token)
        
        dispatch({type : PROFILE_TYPES.GET_PROFILES, payload: {...res.data}})

    } catch (err) {
        dispatch({type : GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
    }
}

export const deleteProfiles = ({profile, auth}) => async (dispatch) => {
    dispatch({ type: PROFILE_TYPES.DELETE_PROFILE, payload: profile })

    try {
        console.log(profile._id)
        const res = await deleteDataAPI(`deleteprofile/${profile._id}`, auth.token)

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}
