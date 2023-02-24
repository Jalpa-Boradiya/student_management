import React, { useState } from 'react'
import './Punch.css'
import '../../css/common.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Service } from '../../service/Service'

function Punch(props) {
    const { setModal, data } = props
    const [location, setLocation] = useState('Select site')
    const [remark, setRemark] = useState('')

    const onHandle = (props) => {
        const { event, type } = props
        switch (type) {
            case "site":
                setLocation(event.target.value)
                break;
            case "remark":
                setRemark(event.target.value)
                break;
            default:
                break;
        }
    }
    const submit = (e) => {
        e.preventDefault()
        const userId = data._id
        Service.get('checkInOut', userId, (res) => {
            localStorage.clear()
            localStorage.setItem('checkinout', JSON.stringify(res.data.Flag))
        }, (err) => {
            console.log(err);
        })
        setLocation('')
        setRemark('')
        setModal(false)

    }
    const status = JSON.parse(localStorage.getItem('checkinout'))
    return (
        <div className='punch-container'>
            <div className='punch-title'>
                Check In/Out
            </div>
            <div className='close-icon'>
                <AiFillCloseCircle onClick={() => setModal(false)} />
            </div>
            <div className='select-site add-space-punch'>
                <label>Site Name</label>
                <select onChange={(event) => onHandle({ event, type: 'site' })}>
                    <option value="">Select site </option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Gandhinagar">Gandhinagar</option>
                </select>
            </div>
            <div className='select-site'>
                <label>Remarks</label>
                <input placeholder={"Enter Remarks(s)"}
                    value={remark}
                    onChange={(event) => onHandle({ event, type: 'remark' })}
                />
            </div>
            <div className='punch-btn' onClick={submit}>
                <button>{status ? 'Check/In' : 'Check/Out'}</button>
            </div>
        </div>
    )
}

export default Punch