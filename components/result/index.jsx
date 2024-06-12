import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Result =  () => {
    const [result, setResult] = useState();
    const userId = useParams();
    // console.log(userId.userId)  //userId is object toh .userId se uss object ki value mil rhi h


    
    useEffect(() => {
      const res =  axios.get(`https://quizattendace.onrender.com/api/user/getCertificates/${userId.userId}`).then(response => {
      console.log(result);
    setResult(response.data); })
}, []);
   
  return (
    <div>
      {/* {result} */}
    </div>
  )
}

export default Result
