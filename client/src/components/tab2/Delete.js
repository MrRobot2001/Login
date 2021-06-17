import React from 'react'
import { useHistory } from 'react-router-dom'
import {deleteProfiles} from '../../redux/actions/profileAction'
export function Delete({profile, auth, dispatch}) {
    const history = useHistory()  

    const deleteProfile = () => {
        if(window.confirm('Are you sure you want to delete this Profile?')){
            dispatch(deleteProfiles({profile,auth}))
            return history.push("/")
        }
    }
    return (
        <div>
            <button className="delete" onClick={deleteProfile}>Delete</button>
        </div>
    )
}

export default Delete;
