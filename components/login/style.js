import styled from 'styled-components';

const LogIn = styled.section`
  margin: 4rem auto;
  padding: 30px;
  font-family: Arial,sans-serif;
  background-color: #fff;
  width: fit-content;
  align-items: center;
  border-radius: 0.8rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3),
              0 8px 16px rgba(0,0,0,0.3);


  h2{
    font-size: 1.5rem;
    text-align: center;
  }

  p{
    margin: auto;
    text-align: center;
  }

  .SignInContainer{
    background-color: #ffff;
    padding: 1.8rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-radius: 0.8rem;
    display: flex;
    justify-content: space-evenly ;
    
    form{
      display: flex;
      flex-direction: column;

      input{
        margin: 10px 0;
        padding: 5px;
        border: 1px solid #ccc;
        background-color:#eee;
        border-radius: 4px;
        font-size: 14px;
        // justify-content:center;
        // align-items:center;
      }

      .Button{
        margin-top: 30px;
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

  a{
    color: #01386A;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
  }

`

export default LogIn