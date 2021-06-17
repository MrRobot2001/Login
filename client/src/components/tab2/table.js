import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Delete from './Delete'
import './Delete.css'
import {getProfiles} from '../../redux/actions/profileAction'
import './table.css'
export function Table() {
    const {profile,auth} = useSelector(state => state)
    const dispatch = useDispatch()


    useEffect(() => {
        if(auth.token){
        dispatch(getProfiles(auth.token))
        }
    },[dispatch,auth.token])

    return (
        <div>
            <div className="center_1">
                <table>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                        <th>Address</th>
                    </tr>
                    {
                        profile.profiles.map((profile1 => (
                            <tr key={profile1._id}>
                                <td>{profile1.username}</td>
                                <td>{profile1.email}</td>
                                <td>{profile1.mobile}</td>
                                <td>{profile1.address}</td>
                                <td><Delete profile={profile1} auth={auth} dispatch={dispatch}/></td>
                            </tr>
                        )))
                    }
                </table>
            </div>
        </div>
    )
}
export default Table
