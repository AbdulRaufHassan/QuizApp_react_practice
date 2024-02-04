import React, { useContext, useState } from 'react'
import REACT_LOGO from '../assets/images/react_logo.png'
import '../css/quizPage.css'
import { AppContext } from '../appContext';
import FirstPage from '../pages/firstPage';

function Header({ time, quizDuration, paddingAdd }) {
    const { component ,setComponent} = useContext(AppContext);
    const { quizStart } = component.props;
    let [timeDur_Min, setTimeDur_Min] = useState(quizDuration)
    let [timeDur_Sec, setTimeDur_Sec] = useState(0)

    const setTime = () => {
        time ? time(
            timeDur_Min === quizDuration - 1
                ? `${60 - timeDur_Sec} sec`
                : `${(quizDuration - 1) - timeDur_Min} min ${timeDur_Sec !== 0 ? `${60 - timeDur_Sec} sec` : ''}`
        )
            : null;
    }
    setTime()

    if (quizStart) {
        let timeOutId = setTimeout(() => {
            if (timeDur_Min === 0 && timeDur_Sec === 0) {
                clearTimeout(timeOutId)
                setComponent(<FirstPage />)
            } else {
                if (timeDur_Sec === 0) {
                    setTimeDur_Min(timeDur_Min - 1);
                    setTimeDur_Sec(59);
                } else {
                    setTimeDur_Sec(timeDur_Sec - 1);
                }
            }
        }, 1000);
    }
    return (
        <div className={quizStart ? 'quizPageHeader' : paddingAdd ? 'quizEndPageHeadr paddingAdd' : 'quizEndPageHeadr'}>
            <div>
                <img src={REACT_LOGO} alt="react-logo" />
                <h1>React Quiz</h1>
            </div>
            {
                quizStart ?
                    <div><span>{timeDur_Min < 10 ? `0${timeDur_Min}` : timeDur_Min}</span><span>:</span><span>{timeDur_Sec < 10 ? `0${timeDur_Sec}` : timeDur_Sec}</span></div>
                    : null
            }
        </div>
    )
}

export default Header