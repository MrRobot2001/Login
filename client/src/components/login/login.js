import React,{useState,useEffect} from 'react'
import './login.css'
import {useHistory} from 'react-router-dom';
import {login} from '../../redux/actions/authAction'
import {useDispatch,useSelector} from 'react-redux'
export function Login() {
    const initialState = { email: '', password:'' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData
    const [typePass, setTypePass] = useState(false)
    const {auth} = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=> {
        if(auth.token) history.push("/")
    },[auth.token,history])

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className="center">
            <h1>Login</h1>
            <form method="post" onSubmit={handleSubmit}>
            <div className="txt_field">
                <input type="Email" required name="email" value={email} onChange={handleChangeInput}/>
                <span></span>
                <label>Email</label>
            </div>
            <div className="txt_field">
                <input type={typePass ? "text" : "password"} required name="password" value={password} onChange={handleChangeInput}/>
                <span></span>
                <label>Password</label>
                <small className="small_2" onClick={() => setTypePass(!typePass)}>{typePass ? 'Hide' : 'Show'}</small>
            </div>
            <input type="submit" name="" value="Login"/>
            <div className="signup_link">
                Not a member? <a href="/signup">Signup</a>
            </div>
            </form>
        </div>
    )
}

export default Login;
