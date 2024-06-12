import { BrowserRouter, Route, Routes } from "react-router-dom"
import QuestionForm from "./components/question-form";
import Header from "./components/header";
import Registration from "./components/signup";
import Login from "./components/login";
import CreateQuiz from "./components/createQuiz";
import Footer from "./components/footer";
import Quizes from "./components/quizes";
import Result from "./components/result";
import QuizDisplay from "./components/quizDisplay";

const App = () => {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/signup" element = {<Registration />} />
        <Route path="/question-form" element = {<QuestionForm  />} />
        <Route path="/create-quiz" element = {<CreateQuiz />} />
        <Route path="/quizes" element = {<Quizes />} />
        <Route path ="/quizes/:id" element = {<QuizDisplay />} />
        <Route path="/result/:userId" element = {<Result />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App
