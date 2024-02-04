import React, { useContext } from 'react'
import '../App.css'
import '../css/firstPage.css'
import REACT_LOGO from '../assets/images/react_logo.png'
import { AppContext } from '../appContext.js';
import QuizPage from './quizPage.jsx';
import quizQuestions from '../questions.js';

function FirstPage() {
  const { setComponent } = useContext(AppContext);
  let quizDuration = 40;
  return (
    <div className='mainDiv'>
      <div className='logo_headng'>
        <div>
          <img src={REACT_LOGO} alt="react-logo" />
          <h1>Welcome to React Quiz!</h1>
        </div>
      </div>
      <div className='dura_startBtn_parentDiv'>
        <div>
          <div><h3>Total Questions</h3><h3>Duration</h3></div>
          <div><h3>{quizQuestions.length}</h3><h3>{quizDuration} min</h3></div>
        </div>
        <button onClick={() => setComponent(<QuizPage quizStart={true} quizDuration={quizDuration} />)}>Let's Start</button>
      </div>
    </div>
  )
}

export default FirstPage