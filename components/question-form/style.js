import styled from 'styled-components';

const QuesForm = styled.section`
margin: 8px auto;
padding: 5px 40px 0px 40px;
font-family: Arial,sans-serif;
width: fit-content;
border-radius: 0.8rem;
display: flex;
flex-direction: column;
background-color: #fff;
box-shadow: 3px 6px 4px rgba(0,0,0,0.3), 0px 8px 16px rgba(0,0,0,0.3);

h2{
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0rem;
}

.QuestionFormContainer{
  background-color: #ffff;
  padding: 1rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-evenly ;


  form{
    display: flex;
    flex-direction: column;

    input{
      margin: 10px 0;
      border: 1px solid #ccc;
      background-color: #eee;
      padding: 5px;
      border-radius: 4px;
      font-size: 14px;
      justify-content: center;
      align-items: center;
    }

    select{
      margin: 10px 0px 30px 0px;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 14px;
      color: #696969;
      appearance: none;
      background: #eee url('https://imgs.search.brave.com/4FBQro2KbFp2g2DAOGVfgdmWhT3QHDuj1sNqKW8sX-Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmVhdGhlci01/LzI0L2Fycm93LWRv/d24tMTI4LnBuZw') no-repeat 98% center;
      background-size: 20px;
    }

    .Button{
      margin: 10px;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
      background-color: ${({ type }) => type === 'button' ? '#01386A' : '#0169a8'};
      color: #ffffff;

      &:hover {
        background-color: ${({ type }) => type === 'button' ? '#0169a8' : '#01386A'};
        transform: scale(1.05);
      }
    }
  }
}

`

export default QuesForm

