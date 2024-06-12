import { styled } from "styled-components"

const DisplayStyle = styled.section`
    margin: auto;
    padding: auto;
    width: fit-content;
    align-items: center;

    .quiz-container{
        background-color: #ffff;
        padding: 3rem;
        margin: 5rem auto;
        width: fit-content;
        border-radius: 0.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly ;
        @media screen and (max-width :769px){
            // width: fit-content !important;
            // height:fit-content !important;
            font-size:.5em;
            }

        .Question{
            font-family:'Poppins', sans-serif, 'Roboto';
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 15px;
        }

        label{
            font-family:'Poppins', sans-serif;
            font-weight:400;
            font-size:14px;
        }

        .Button{
            margin: 30px;
            padding: 10px 25px;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            align-items: center;
            text-align: center;
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
`

export default DisplayStyle