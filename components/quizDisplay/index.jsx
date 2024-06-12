import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'
import DisplayStyle from './style'


const QuizDisplay = () => {

  const [questions, setQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption,setSelectedOption] = useState(null);
  const [quizes , setQuizes] = useState([])
  const param = useParams()
  const navigate = useNavigate()

  
  useEffect(() => {
    axios.get(`https://quizattendace.onrender.com/api/quiz/read`)         
    .then(response => {
      setQuizes(response.data)  
    })
    .catch(error => console.error('Error fetching quizzes:', error));
      console.log(questions)
  }, []);

  useEffect(() => {
    if(quizes && quizes.length){
      const indexMatch = quizes.findIndex(q => q.id === param.id)
      setQuestions(quizes[indexMatch].ques)      
    }  
  },[quizes])

const nextQuestion = () => {
  if(currentIdx < questions.length - 1) {
    setCurrentIdx(currentIdx + 1);
    setSelectedOption(null);                   
  }
}


   const handleSubmit = () =>{
    console.log(JSON.parse(localStorage.getItem("loggedInUser")));
   const studentcontact = JSON.parse(localStorage.getItem("loggedInUser")).contact
   const user = JSON.parse(localStorage.getItem("loggedInUser"))
   const answers = {}

  for (let idx = 0; idx < questions.length; idx++) {
    const question = questions[idx];
    answers[question.id] = selectedOption;
  }

   const result = {

    contact : studentcontact,
    quizId : param.id,
    answers : answers,
    }
    console.log(result);
   axios.post('https://quizattendace.onrender.com/api/quiz/evaluate',result)
   .then(response => {
    console.log('Result:', response.data)
   })
   .catch(console.log)
    navigate(`/result/${user.id}`);      //for taking user id from localstorage
  }



  
  return (
    <DisplayStyle>
    <div className='quiz-container'>
    
    {questions.length > 0 && currentIdx <= questions.length - 1 && (
      <div>
        <div className='Question'>
          {questions[currentIdx].ques}
        </div>
        {questions[currentIdx].ans.map((option,idx) => (
        <div key={idx}>
          <label>
          <input
            type='radio'
            onChange={() => setSelectedOption(option)}
            checked = {selectedOption === option}
          />
          {option}
          </label>
        </div>)
  )}
  
      {currentIdx < questions.length -1 && (
      <button
        className='Button' 
        onClick={nextQuestion}
        disabled = {!selectedOption}>
          Next
      </button>
      )}
    </div>
    )}
      {currentIdx === questions.length - 1 && (
      <div>
        
        <button 
          className='Button'
          onClick={handleSubmit}>
            Submit
        </button></div>)}
      </div>
    </DisplayStyle>
  )
}

export default QuizDisplay
