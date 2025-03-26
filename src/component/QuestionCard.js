import React, { use, useState } from 'react'
import './questionCard.css'
const QuestionCard = (props) => {
    const [click, setClick] = useState(false);
    // const [chooseAns, setChooseAns] = useState(false);
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);
    const ans = props.answer;
    function handleOption(stateUpdater) {
        stateUpdater(prevState => !prevState);
    }
    function handleAns(selectedOption, op) {
        console.log(ans);
        console.log(selectedOption);
        if(ans == selectedOption){
            switch(op){
                case 1:
                    setOption1(true);
                    break;
                case 2:
                    setOption2(true);
                    break;
                case 3:
                    setOption3(true);
                    break;
                default:
                    setOption4(true);
                    break;
            }   
        }
    }
    return (
        <div className='questionBox'>
            <h2>{props.questionNumber}. {props.question}</h2>
            <div className="options-all">
                <span className={`${option1 ?"clicked-ans":""} test`} onClick={(e) => handleAns(props.option1,1)} >A. {props.option1}</span>
                <span className={`${option2 ?"clicked-ans":''} test`} onClick={(e) => handleAns(props.option2,2)} >B. {props.option2}</span>
                <span className={`${option3 ?"clicked-ans":''} test`} onClick={(e) => handleAns(props.option3,3)} >C. {props.option3}</span>
                <span className={`${option4 ?"clicked-ans":''} test`} onClick={(e) => handleAns(props.option4,4)} >D. {props.option4}</span>
            </div>
            <div className="answer">
                <button type="button" onClick={(e) => handleOption(setClick)} >Answer</button>
                <div className={click ? '' : 'hide-ans'}>
                    <div className="answer-area">
                        {props.answer}
                    </div>
                    <div className="explanation">
                        {props.explanation}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard