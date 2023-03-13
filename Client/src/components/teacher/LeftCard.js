import React, { useReducer } from 'react'
import { Service } from '../../service/Service';
import '../profile/MyProfile.css'

function LeftCard() {
    const initialState = {
        question: '',
        startDate: '',
        endDate: ''
    }
    const reducerLeave = (state, action) => {
        switch (action.type) {
            case 'question':
                return { ...state, [action.type]: action.value };
            case 'startDate':
                return { ...state, [action.type]: action.value };
            case 'endDate':
                return { ...state, [action.type]: action.value };
            case 'reset':
                return initialState
            default:
                throw new Error(`Unknown action type: ${action.type}`);
        }
    };

    const [state, dispatch] = useReducer(reducerLeave, initialState);

    function handleInputChange({ event, type }) {
        dispatch({
            type: type,
            value: event.target.value
        });
    }

    const addHomework = (event) => {
        event.preventDefault();
        const data = {
            "teacherId": "640ad53ce843b1161e9868b7",
            "lastDay": state.endDate,
            "question": state.question,
        }
        Service.post('addQuestion', 'teacher', data, (res) => {
            if (res.code === "200") {
                dispatch({
                    type: 'reset'
                })
                console.log('res getting from add question', res.data);
            }
        },
            (err) => { console.log(err) }
        )
    }


    return (
        <div className='left-card teacher-left-card'>
            <h3>Add Homework</h3>
            <div className='add-homework'>
                <label className='write-question'>Write a question ?</label>
                <input className='write-question-input' onChange={(event) => handleInputChange({ event: event, type: "question" })} />
            </div>
            <div className='homework-date'>
                <div>
                    <label className='write-question'>Due Date :</label>
                    <input type="date" className='homework-input-date' onChange={(event) => handleInputChange({ event: event, type: "endDate" })} />
                </div>
            </div>
            <div className='add-to-homework'>
                <button onClick={addHomework}>Add Homework</button>
            </div>
        </div>
    )
}

export default LeftCard