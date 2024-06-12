import { useState } from "react"
import LogIn from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

    const [contactExist, setContactExist] = useState(null);
    const [passwordExist, setPasswordExist] = useState(null);

        const add = (e) => {
          if(contactExist && passwordExist){
          e.preventDefault()
          e.target.value = "Logging In ..."
          e.target.disabled = true
          axios.post("https://quizattendace.onrender.com/api/user/login",{
            contact : contactExist,
            password : passwordExist
          })
          .then(response => {
            console.log(response.data)
            if(response.data){
              alert(`Welcome  ${response.data.user.role}`)
              if(response.data.user.role === "faculty"){
                navigate("/create-quiz")
              }
              else if(response.data.user.role === "student"){
                navigate("/quizes")
              }
              localStorage.setItem("loggedInUser",JSON.stringify(response.data.user))
              console.log(JSON.parse(localStorage.getItem("loggedInUser")).contact)
            }
            else{
            alert("Invalid user")
            }
          }).catch(console.log)
          .finally(() => {
            e.target.value = "Login"
            e.target.disabled = false
          })
        }
        else{
          alert('Please fill all the fields')
        }
      }

  return (
    <LogIn>
        <h2>Log In</h2>
        <div className="SignInContainer">
        <form>
        <input
          type="text" 
          placeholder="Contact Number"
          required
          onChange={(e) => setContactExist(e.target.value)}
        />
        <input      
          type = "password"
          placeholder = "Password" 
          required
          onChange={(e) => setPasswordExist(e.target.value)}
        />
        <input
          type = "button"
          className="Button"
          value = "Log In"
          onClick={ add }
        />
      </form>
    </div>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    
    </LogIn>
    )
}

export default Login
