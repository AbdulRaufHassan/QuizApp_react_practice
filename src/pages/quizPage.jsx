import React, { useContext, useState } from 'react'
import Header from '../components/Header.jsx'
import quizQuestions from '../questions'
import { AppContext } from '../appContext';
import QuizEnd from './quizEnd';
function QuizPage() {
    const { component, setComponent } = useContext(AppContext);
    const { quizDuration } = component.props;
    const [quesIndex, setQuesIndex] = useState(0);
    const optionAlphabets = ['A', 'B', 'C', 'D'];
    const [selectedOption, setSelectedOption] = useState(null);
    let timeSpent;
    const getTimeSpent = (timeSpentVal) => {
        timeSpent = timeSpentVal;
    }
    const nextBtn = () => {
        if ((quesIndex + 1) != quizQuestions.length) {
            quizQuestions[quesIndex].userAnswer = selectedOption
            setQuesIndex(quesIndex + 1)
            setSelectedOption(null)
        }
        else {
            quizQuestions[quesIndex].userAnswer = selectedOption
            setComponent(<QuizEnd quizEnd={true} updatedQuestionsArray={quizQuestions} timeSpent={timeSpent} />)
        }
    }
    return (
        <>
            <Header time={(quesIndex + 1) === quizQuestions.length ? getTimeSpent : null} quizDuration={quizDuration}/>
            <div className='quizContainer'>
                <h2>Question {quesIndex + 1}/{quizQuestions.length}</h2>
                <div className='ques_parentDiv'><p>{quizQuestions[quesIndex].question}</p></div>
                <div className='options_parentDiv'>
                    <ul>
                        {quizQuestions[quesIndex].options.map((v, i) => (
                            <li key={i} className={selectedOption === i ? 'selectedOption' : ''}>
                                <input type="radio" id={`option${optionAlphabets[i]}`} name='quiz_option' onChange={() => setSelectedOption(i)} checked={selectedOption === i} />
                                <label htmlFor={`option${optionAlphabets[i]}`}>
                                    <span>{optionAlphabets[i]}</span><p>{v}</p></label></li>))}
                    </ul>
                </div>
                {selectedOption === 0 || selectedOption ?
                    <button onClick={() => nextBtn()}>Next</button>
                    : null}
            </div >
        </>
    )
}

export default QuizPage