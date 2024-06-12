import { styled } from "styled-components";

const QuizesStyle = styled.section`
    margin: auto;
    padding: 30px;
    max-width: 769px;

    .QuizContainer{
        max-width: 769px;
        background-color: #ffff;
        padding: 15px;
        margin: 5px;
        border-radius: 0.8rem;
        display: block;

            .Button{
                margin: 5px;
                padding: 10px 20px;
                border: none;
                font-size: 14px;
                border-radius:4px;
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

export default QuizesStyle