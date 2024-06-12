import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Question } from '../../modals/Question';
import QuesForm from './style';
import axios from 'axios';

const QuestionForm = () => {

    const [question, setQuestion] = useState(null);
    const [option1, setOption1] = useState(null);
    const [option2, setOption2] = useState(null);
    const [option3, setOption3] = useState(null);
    const [option4, setOption4] = useState(null);
    const [answer, setAnswer] = useState(0);
    const [quizes, setQuizes] = useState([])
    const navigated = useNavigate();

    const AddQuiz = () => {
        navigated('/create-quiz');
    }

    useEffect(() => {
        axios.get('https://quizattendace.onrender.com/api/quiz/read')
        .then(res => {
            setQuizes(res.data)
            setQuiz(res.data[0])
        })
    },[])
    
    const [quiz, setQuiz] = useState(quizes[0]);
    
    
    const add = (e) =>{
        if(question && option1 && option2 && option3 && option4 && answer){
        const newQuestion = new Question(question, [option1, option2, option3, option4], +answer, quiz.id);
        
        // const quest = {
        //     id: newQuestion.id,
        //     question :newQuestion.question ,
        //     options: newQuestion.options
        // }
        e.preventDefault()
        e.target.value = "Adding Question ..."
        e.target.disabled = true
        axios.post("https://quizattendace.onrender.com/api/ques/add", newQuestion)
        .then(response => {
            console.log(response)
        }).catch(console.log)
        .finally(() => {
            e.target.value = "Add Question"
            e.target.disabled = false
            setQuestion("")
            setOption1("")
            setOption2("")
            setOption3("")
            setOption4("")
            setAnswer("")
        })
    }
    else{
        alert("Field(s) empty");
    }
    console.log(quizes);
        
    }

  return (
    <QuesForm>
        <h2>Add Question</h2>
        <div className='QuestionFormContainer'>
        <form>
            <input 
                type="text" 
                placeholder='Enter the question'
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Option 1'
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Option 2'
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Option 3'
                value={option3}
                onChange={(e) => setOption3(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Option 4'
                value={option4}
                onChange={(e) => setOption4(e.target.value)}
            />
            <select name="correctAnswer" id="correctAnswer"  onChange={(e) => setAnswer(e.target.value)}>
                <option value="" disabled selected>--Choose Answer--</option>
                <option value={1}>{option1}</option>
                <option value={2}>{option2}</option>
                <option value={3}>{option3}</option>
                <option value={4}>{option4}</option>
            </select>
            <select onChange={e => setQuiz(JSON.parse(e.target.value))}>
                {
                    quizes.map(quiz => <option key={quiz.id} value={JSON.stringify(quiz)}>{quiz.title}</option>)
                }
            </select>
            <input 
                type="button" 
                className='Button'
                value='Add Question'
                onClick={add}
            />
            <input 
                type="button" 
                className='Button'
                value='Create New Quiz'
                onClick={ AddQuiz }
            />
        </form>
      </div>
    </QuesForm>
  )
}

export default QuestionForm
