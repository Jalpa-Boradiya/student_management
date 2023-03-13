import React from 'react'
import Loader from '../loader/Loader'
import Navbar from '../navbar/Navbar'
import './HomeworkListiong.css'

function HomeworkListing(props) {
    const { isLoading, onLoding } = props.loader

    const status = (status) => {
        if (status === "Submit") {
            return <span className='submit-homework-status'>{`${status} `}</span>
        } else {
            return <span className='pending-homework-status'>{`${status} `}</span>
        }
    }
    return (
        <>
            {
                isLoading ?
                    <div className='loader-route'>
                        <Loader />
                    </div>
                    :
                    <div className='student-container'>
                        <Navbar />
                        <div className='home-line' />
                        <div className='listing-to-question' id='middle-home'>
                            <h3>ALL QUESTIONS</h3>
                            {
                                data.length > 0 ?
                                    data.map((item) => {
                                        return (
                                            <div className='question-listing'>
                                                <div className='status-and-name'>
                                                    <label className='hname'>{`${item.name} `}</label>
                                                    <label className='hstatus'>{status(item.status)}</label>
                                                </div>
                                                <label>{`Answer.`}</label>
                                                <label className='hhomework'>{`- ${item.homework} `}</label>
                                            </div>
                                        )
                                    })
                                    :
                                    <div className='no-data-found'>
                                        <p>No Data Found !</p>
                                    </div>
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default HomeworkListing

const data = [
    {
        name: 'Jalpa Boradiya',
        status: 'Pending',
        homework: 'Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it requires less coding and offers more functionality, as opposed to JavaScript, where coding often gets complex very quickly. Improved performance: React uses Virtual DOM, thereby creating web applications faster.'
    },
    {
        name: 'Maitry Acharya',
        status: 'Submit',
        homework: 'One of the best ReactJS features is that it helps create an interactive and dynamic UI for mobile apps and websites. Because of this, the ReactJS code gets more user-friendly, readable, and easy to debug. While the library can create engaging UIs, it can also create a seamless view system for every state in the app.'
    },
]