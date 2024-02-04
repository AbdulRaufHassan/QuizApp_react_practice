import React, { useContext, useState } from 'react'
import '../css/quizEnd.css'
import Header from '../components/Header.jsx'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AppContext } from '../appContext';
import FirstPage from './firstPage.jsx';
import CheckAnswers from './checkAns';
function QuizEnd({ updatedQuestionsArray, timeSpent, iconShow }) {
    const { setComponent } = useContext(AppContext);
    let userCorrectAnsCount = 0;
    for (let i = 0; i < updatedQuestionsArray.length; i++) {
        if (updatedQuestionsArray[i].answer === updatedQuestionsArray[i].userAnswer) {
            userCorrectAnsCount++;
        }
    }
    let percentage = Math.floor((userCorrectAnsCount / updatedQuestionsArray.length) * 100);
    return (
        <>
            <Header iconShow={iconShow} />
            <div className='resultMainDiv'>
                <h1>Result</h1>
                <div>
                    <div><span>Total Questions</span><span>Correct Questions</span><span>Time Spent</span></div>
                    <div><span>{updatedQuestionsArray.length}</span><span>{userCorrectAnsCount}</span><span>{timeSpent}</span></div>
                </div>
                <div style={{ height: '170px', width: '170px', marginTop: '20px' }}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                        pathColor: `#087ea4`,
                        textColor: '#087ea4'
                    })} />
                </div>
                <div>
                    <button onClick={() => setComponent(<CheckAnswers quizEnd={true} updatedQuestionsArray={updatedQuestionsArray} timeSpent={timeSpent} correctAnsCount={userCorrectAnsCount} correctAnsper={percentage}/>)}>Check your Answers</button>
                    <button onClick={() => setComponent(<FirstPage />)}>Goto Home</button>
                </div>
            </div>
        </>
    )
}

export default QuizEnd