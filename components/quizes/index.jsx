import React, { useEffect, useState } from 'react';
import axios from 'axios';

import QuizesStyle from './style';
import { useNavigate } from 'react-router-dom';

const Quizes = () => {
  const [quizes, setQuizes] = useState([]);
  const navigate = useNavigate()
  
  useEffect(() => {
    axios.get('https://quizattendace.onrender.com/api/quiz/read')
      .then(res => setQuizes(res.data))
      .catch(error => console.error('Error fetching quizzes:', error));
  }, []);
  

  return (
    <QuizesStyle>
      <div className='QuizContainer'>
        {quizes.map(quiz => (
          <button className='Button' key={quiz.id} onClick={() => navigate(`${quiz.id}`)}>
            {quiz.title}
          </button>
        ))}
      </div>
    </QuizesStyle>
  );
};

export default Quizes;
