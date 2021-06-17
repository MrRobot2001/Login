import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import Form from './tab1/form'
import Table from './tab2/table'
import './tab.css'

export function Tab() {
    const {profile,data} = useSelector(state => state)
    const dispatch = useDispatch()

    const[saveTab, setSaveTab] = useState(false)
    return (
        <div>
        <div className="savetab_1">
            <button className={saveTab ? '' : 'active'} onClick={() => setSaveTab(false)}>TAB 1</button>
            <button className={saveTab ? 'active' : ''} onClick={() => setSaveTab(true)}>TAB 2</button>
        </div>
        {
            saveTab
            ? <Table />
            : <Form/>
        }
        </div>
    )
}

export default Tab
