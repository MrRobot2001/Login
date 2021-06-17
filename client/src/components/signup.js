import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {signup} from '../redux/actions/authAction';
export function Signup() {
    const {auth} = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    
    const initialState = { 
        email: '', password: ''
    }

    const [ userData,setUserData ] = useState(initialState)
    const { email, password } = userData
    const [typePass, setTypePass] = useState(false)

    useEffect(()=> {
        if(auth.token) history.push("/")
    },[auth.token,history])

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(signup(userData))
    }

    return (
        <div className="center">
            <h1>SignUp</h1>
            <form method="post" onSubmit={handleSubmit}>
            <div className="txt_field">
                <input type="Email" required name="email" onChange={handleChangeInput} value={email}/>
                <span></span>
                <label>Email</label>
            </div>
            <div className="txt_field">
                <input type={typePass ? "text" : "password"} required name="password" onChange={handleChangeInput} value={password}/>
                <span></span>
                <label>Password</label>
                <small className="small_2" onClick={() => setTypePass(!typePass)}>{typePass ? 'Hide' : 'Show'}</small>
            </div>
            <input type="submit" valuname="" e="SignUp"/>
            <div className="signup_link">
                Already a member? <a href="/">Login</a>
            </div>
            </form>
        </div>
    )
}

export default Signup
