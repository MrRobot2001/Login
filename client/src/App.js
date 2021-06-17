import {BrowserRouter as Router,Route} from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Login from './components/login/login'
import tab from './components/tab'
import SignUp from './components/signup'
import Alert from './components/Alert/Alert'
import {refreshToken} from './redux/actions/authAction'

function App() {
  const {auth} = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())
  },[dispatch])

  return (
    <Router>
      <Alert/>
      <div>
        <Route exact path="/" component={auth.token ? tab : Login }/>
        <Route exact path="/signup" component={SignUp}/>
      </div>
    </Router>
  );
}

export default App;
