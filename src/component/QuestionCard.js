import React, { useState } from 'react'
import './questionCard.css'
const QuestionCard = (props) => {
    const [click, setClick] = useState(false);
    const [backgrounds, setBackgrounds] = useState(['','','','']); // Array to track background styles
   
    const ans = props.answer;
    function handleOption(stateUpdater) {
        stateUpdater(prevState => !prevState);
    }
    const handleOptionClick = (selectedOptionIndex) => {
        setBackgrounds((prev) =>
            prev.map((bg, index) =>
                index === selectedOptionIndex
                    ? (props.options[selectedOptionIndex] === ans ? 'greenyellow' : 'red') // Highlight green if correct, red if wrong
                    : ''
            )
        );
    };
    return (
        <div className='questionBox'>
            <h2>{props.questionNumber}. {props.question}</h2>
            <div className="options-all">

                {props.options.map((option, index) => (
                    <span
                        key={index}
                        className="test"
                        style={{ backgroundColor: backgrounds[index] }}
                        onClick={() => handleOptionClick(index)}
                    >
                        {String.fromCharCode(65 + index)}. {option}
                    </span>
                ))}

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