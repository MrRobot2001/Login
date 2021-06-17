import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Alert.css';
import Alert1 from './Alert1';
import {GLOBALTYPES} from '../../redux/actions/globalTypes';
export function Alert() {
    const {alert} = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            {alert.error && <Alert1 msg={{body:alert.error}}
            handleShow={() => dispatch({type: GLOBALTYPES.ALERT,payload:{}})} bg="red" />
            }
            {alert.success && <Alert1 msg={{body:alert.success}}
            handleShow={() => dispatch({type: GLOBALTYPES.ALERT,payload:{}})} bg="green"/>}
        </div>
    )
}

export default Alert;