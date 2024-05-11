import React from "react";


const Booking =()=>{
   const[Name,setName]=React.useState('');
   const[Email,setEmail]=React.useState('');
   const[BusType,setBusType]=React.useState('');
   const[MobileNo,setMobileNo]=React.useState('');
   const Booking= async()=>{
      console.warn(Name,Email,BusType,MobileNo);
      alert("Your car has been booked") 
      const userId = JSON.parse( localStorage.getItem('user'))._id;
      let result =await fetch("http://localhost:5000/add-booking",{
         method:'post',
         body:JSON.stringify({Name,Email,BusType,MobileNo,userId}),
         headers:{
            "Content-Type":"application/json"
         }
      });
      result = await result.json();
      console.log(result)
       
   }
 
   return(
      <div  className="aks">
    <div className="carbookings">
       
              
                
                  
                       
                        <input type="text" placeholder="Enter your name" className="inputBox"
                        onChange={(e)=>{setName(e.target.value)}} value={Name}
                        />
                        

                        
                        <input type="text"  placeholder="Enter your email id"className="inputBox"
                        onChange={(e)=>{setEmail(e.target.value)}} value={Email}/>
                        
                       
                        <input type="text"  placeholder="Enter your Bus type" className="inputBox"
                        onChange={(e)=>{setBusType(e.target.value)}} value={BusType}/>
                       

                       
                        <input type="no"  placeholder="Enter your mobile no" className="inputBox"
                        onChange={(e)=>{setMobileNo(e.target.value)}} value={MobileNo}
                        />
                        
                      

                       <button onClick={Booking} 
                       className="bookingbutton">Booking</button>

                        
                        </div>
                        </div>
   ) 
    
}
export default Booking;