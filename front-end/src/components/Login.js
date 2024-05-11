import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();

useEffect(()=>{
  const auth =localStorage.getItem('user');
  if(auth)
  {
    navigate('/')
  }
})
  const collectData = async () => {
    console.warn(Name, Email, Password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ Name, Email, Password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user",JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };
  return (
    <div className="Loginn">
    <div className="Login">
      <h1 className="register">Register</h1>
      <input className="inputBox" type="text"  value={Name}  onChange={(e) => setName(e.target.value)}  placeholder="Enter Name"
      />
      <input className="inputBox"type="text" value={Email}
        onChange={(e) => setEmail(e.target.value)}placeholder="Enter Email"
      />
      <input
        className="inputBox"type="Password" value={Password}
        onChange={(e) => setPassword(e.target.value)}placeholder="Enter Password"
      />

      <button onClick={collectData} className="bookingbutton"type="button">
      
        Login
      </button>
    </div>
    </div>
  );
};
export default Login;
