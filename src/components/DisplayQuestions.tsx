import React, { useState } from 'react'
import { quizResultArrayObjTypes } from '../services/types/Types'

import page from '../images/whitepage.jpg'
import rightArrow from '../images/right_arrow.svg'



import './DisplayQuestions.css'






const DisplayQuestions: React.FC<{ questions: quizResultArrayObjTypes[], index: number, checkAnswer: (ans: string) => void }> = ({ questions, checkAnswer, index }) => {
    
    const [answer, setAnswer] = useState('')
    const [toggle,setToggle]=useState(false)
    
    
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToggle(true)
        
        setAnswer(event.target.value)
    }
    const handleClick = () => {
        
        setToggle(false)
        
        checkAnswer(answer)
        
        
        
    }
    
    if (questions.length === 0 || questions[index]===undefined) {
        
        
            return(
                <div>

                </div>
            )
        
        
    }


    return (
        <div className="question_paper">


            <div className="page">
            <img src={page} alt="" id="page_img"/></div>
            <div className="question">
                <div className="question_no"><span>{index + 1})</span></div>
                <h3> {questions[index].question}</h3>
            </div>
            <div className='question_options'>
            
            <form>
                {questions[index].incorrect_answers.map((options: string, j: number) => {
                    return (
                        <label key={j}>
                        <input type="radio"
                        value={options}
                        name='options'
                        checked={answer===options}
                        onChange={handleChange}
                        />
                        <span>{options}</span>
                        

                
                        
                        </label>  


)
})}
                <div className={toggle?'arrow_img':'button'}
                onClick={handleClick}>
                    <span>Next</span>
                    <img src={rightArrow} alt="Next"
                    
                    />
                </div>
                {/* <button onClick={handleClick}>Next Question</button> */}
                </form>
            </div>





        </div>
    );
}
export default DisplayQuestions;

