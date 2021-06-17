import React,{useState,useEffect} from 'react'
import './form.css'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {save} from '../../redux/actions/profileAction'
export function Form() {
    const {auth} = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = { 
        username: '', email: '', mobile: '', address: ''
    }

    const [ profileData,setprofileData ] = useState(initialState)
    const { username, email, mobile, address } = profileData

    useEffect(()=> {
        if(auth.token) history.push("/")
    },[auth.token,history])

    const handleChangeInput = e => {
        const {name, value} = e.target
        setprofileData({...profileData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(save({profileData,auth}))
    }


    return (
        <div className="center">
            <h1>Input</h1>
            <form method="post" onSubmit={handleSubmit}>
            <div className="txt_field">
                <input type="text" required onChange={handleChangeInput} name="username" value={username}/>
                <span></span>
                <label>username</label>
            </div>
            <div className="txt_field">
                <input type="number" required onChange={handleChangeInput} name="mobile" value={mobile}/>
                <span></span>
                <label>Mobile Number</label>
            </div>
            <div className="txt_field">
                <input type="Email" required onChange={handleChangeInput} name="email" value={email}/>
                <span></span>
                <label>Email</label>
            </div>
            <div className="txt_field">
                <input type="text" required onChange={handleChangeInput} name="address" value={address}/>
                <span></span>
                <label>Address</label>
            </div>
            <input type="submit" name="" className="s" value="Submit"/>
            </form>
        </div>
    )
}
export default Form;
