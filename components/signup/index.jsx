import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignUp from './style';

const Registration = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmpassword, setConfirmPassword] = useState(null)
    const [role, setRole] = useState(null);
    const [contact, setContact] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        if(username && password && role && contact){
            if((password === confirmpassword)){
                add(e)
            }
            else{ 
                alert("Password doesn't match .")
            }
        }
        else{
            alert("Field(s) are empty")
        }
    }
    
    const add = (e) => {
        e.preventDefault()
        e.target.value = "Signing Up ..."
        e.target.disabled = true
        console.log(role)
        axios.post("https://quizattendace.onrender.com/api/user/add",{
            username,
            contact,
            password,
            role
        }).then(response => {
            console.log(response.data)
        }).catch(console.log)
        .finally(() => {
            e.target.value = "Signup"
            e.target.disabled = false
            setUsername("")
            setContact(null)
            setPassword(null)
            setRole(null)
            navigate("/")
        })
    }

    return (
        <SignUp>    
        <h2>Registration</h2>
        <div className='SignUpContainer'>
            <form>
            <input       
                type="text" 
                placeholder="Username" 
                required 
                pattern="[a-zA-Z0-9 ]+"
                onChange={(e) => setUsername (e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Contact" 
                required
                pattern='[0-9]{10}'
                onChange={(e) => setContact (e.target.value)}                
            />
            <input
                type="password" 
                placeholder="Password" 
                required
                onChange={(e) => setPassword (e.target.value)}    
            />
            <input
                type="password" 
                placeholder="Confirm Password" 
                required
                onChange={(e) => setConfirmPassword (e.target.value)}
            />
            <select onChange={(e) => setRole(e.target.value)}>
                    <option value="" disabled selected>--Select Role--</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
            </select>
            <input 
                type="submit"
                className='Button'
                value = "SignUp"
                onClick={ handleSignUp } 
            />
            </form>
            </div>
            <p>Already have an Account? <a href="/">Login</a></p>
    </SignUp>
  )
}

export default Registration
