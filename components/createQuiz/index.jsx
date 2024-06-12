import React from 'react'
import { useState } from 'react'
import { Quiz } from '../../modals/Quiz';
import { useNavigate } from 'react-router-dom';
import CreateQuizStyle from './style';
import axios from 'axios';

const CreateQuiz = () => {

    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null);
    const navigate = useNavigate();
    const addQuiz = (e) =>{
        if(title && description){
        e.preventDefault()
        e.target.value = "Creating Quiz ..."
        e.target.disabled = true
        const newQuiz = new Quiz(title,description)
        axios.post("https://quizattendace.onrender.com/api/quiz/add", newQuiz)
        .then(response => {
            console.log(response)
            navigate("/question-form")
        }).catch(console.log)
        .finally(() => {
            e.target.value = "Add Quiz"
            e.target.disabled = false
            setTitle("")
            setDescription("")
        })
        navigate("/question-form")
    }
        else{
            alert("Field(s) empty")
        }
    }

    const addQuestion = () => {
        navigate("/question-form")
    }
    
    return (
        <CreateQuizStyle>
        <h2>Create Quiz</h2>
        <div className="createquiz">
        <form action="">
            <input 
                type="text" 
                placeholder='Title of Quiz'
                required
                onChange={(e) => setTitle(e.target.value)}
                />
            <input 
                type="text"
                placeholder='Description'
                required
                onChange={(e) => setDescription(e.target.value)} 
                />
            <input 
                type="button"
                className='Button' 
                value="Create Quiz"
                onClick={addQuiz}
                />
            <label>Add questions to existing quiz ?</label>
            <input 
                type="button"
                className='Button' 
                value="Add Question"
                onClick={addQuestion}
                />
        </form>
        </div>
        </CreateQuizStyle>
    )
}

export default CreateQuiz

// const addQuestion = () => {
    //     let quizes = localStorage.getItem("QUIZES") ? navigate("/question-form") : alert("No existing quizes")
    // }
// quizes.push(newQuiz)
// localStorage.setItem("QUIZES", JSON.stringify(quizes))