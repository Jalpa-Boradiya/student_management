import React, { useEffect } from 'react'
import '../service/StudentService.css'
import { Link, useNavigate } from 'react-router-dom';
import { Service } from '../../service/Service';

function RightCard() {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        getAllQuestion()
    }, [])

    const getAllQuestion = () => {
        const teacherId = "640ad53ce843b1161e9868b7"
        Service.get('allQuestion', 'teacher', teacherId, (res) => {
            if (res.code === "200") {
                console.log('res getting from get all question', res.data);
                setData(res.data)
            }
        },
            (err) => { console.log(err) }
        )
    }
    return (
        <>
            <div className='right-card teacher-right-card'>
                <h3>ALL QUESTIONS</h3>
                <ul className='question-list'>
                    {
                        data?.length > 0 && data.map((item) => {
                            return (
                                <li><Link to={'./homworkListing'}>{`Q - ${item.question}`}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default RightCard

// const data = [
//     "What are the features of React?",
//     "What is JSX?",
//     "Can web browsers read JSX directly?",
//     "What is the virtual DOM?",
//     "Why use React instead of other frameworks, like Angular?",
//     "What is the difference between the ES6 and ES5 standards?",
//     " How do you create a React app?",
//     "What is an event in React?",
// ]