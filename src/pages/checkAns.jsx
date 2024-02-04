import React, { useContext } from 'react'
import Header from '../components/Header'
import { AppContext } from '../appContext';
import { FaCheck, FaTimes } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import QuizEnd from './quizEnd';
import '../css/checkAns.css'

function CheckAnswers({ updatedQuestionsArray, timeSpent, correctAnsCount, correctAnsper }) {
    const { setComponent } = useContext(AppContext);
    const correctAnswerCondition = (option, question) => {
        return option === question.options[question.answer] && option === question.options[question.userAnswer];
    }
    return (
        <>
            <Header paddingAdd={true} />
            <button className='backBtn' onClick={() => setComponent(<QuizEnd quizEnd={true} updatedQuestionsArray={updatedQuestionsArray} timeSpent={timeSpent} iconShow={false} />)}><IoIosArrowBack /></button>
            <div className='score_Per'>
                <h1>Score : {correctAnsCount} of {updatedQuestionsArray.length}</h1>
                <h1>{correctAnsper}% Correct</h1>
            </div>
            <div className='answersContainer'>
                {
                    updatedQuestionsArray.slice(0, (updatedQuestionsArray.length + 1)).map((question, index) => (
                        <div key={index}>
                            <h1>{`Question ${index + 1}`}</h1>
                            <p>{question.question}</p>
                            <ul>
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex} className={correctAnswerCondition(option, question) ? 'correctAnswer' : 'incorrectAnswer'}>
                                        {(correctAnswerCondition(option, question)) ? <span className='CheckIcon'><FaCheck /></span>
                                            : option === question.options[question.userAnswer] ? <span className='incorrectIcon'><FaTimes /></span> : null}
                                        <p>{option}</p>{option === question.options[question.userAnswer] ? <span className='bagde'><span>{'Your Answer'}</span></span> : option === question.options[question.answer] ? <span className='bagde'><span>{'correct Answer'}</span></span> : null}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default CheckAnswers