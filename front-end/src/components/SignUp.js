import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp =()=>{
    const [Password, setPassword] = React. useState("");
    const [Email, setEmail] = React.useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if( auth){
            navigate("/")
        }
    })
    const handlesignup= async ()=>{
        console.log("Email,Password",Email,Password)
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({Email,Password}),
            headers:{
                "Content-Type": "application/json",
            }
        });
        result = await result.json();
        console.log(result)
        if(result.Name){
          localStorage.setItem('user',JSON.stringify(result));
          navigate("/")

        } else
        {
            alert("please enter correct detail")
        }
    }
    return(
        <div className="signupp">
        <div className="signup">
        <h1 className="sign">Login</h1>
        
        <input className="inputBox"type="text"  value={Email}
        onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"
        />
        <input
          className="inputBox"type="Password" value={Password}
          onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"
        />
        
      <button onClick={handlesignup}
    className="bookingbutton" type="button">Sign Up</button>
        </div>
        </div>
    )
}
export default SignUp