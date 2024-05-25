import React, { useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function CreateAcoount() {

  const[username,setUsername]=useState('')
  const[useremail,setUserEmail]=useState('')
  const[userpassword,setUserPassword]=useState('')

 
  const buttonClickNext=()=>{
    if (!username || !useremail || !userpassword) {
      alert("Please fill in all fields");
      return; 
    }
    var dat={
     username:username,
     useremail:useremail,
     userpassword:userpassword
    }

      axios.post('http://localhost:7556/Createuser', dat)
    .then((response)=>{
      if(response.data.message==="True"){
        window.location.href = '/';
      }
      else{
        alert('Failed')
      }
    })
    
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to='/'>
          <img
            src="Netflixlogo.png"
            alt="Netflix Logo"
            width="280px"
            style={{ marginTop: "-33px" }}
          />
        </Link>

        <div
          style={{
            fontSize: "larger",
            margin: "28px 70px 0 0 ",
            fontWeight: "500",
          }}
        >
          Sign In
        </div>
      </div>
      <div style={{ borderTop: "1px solid #e6e6e6", marginTop: "-30px" }}></div>
      <div style={{marginInline:'530px',marginTop:'40px',marginBottom:"150px"}}>
        <div style={{fontSize:'smaller'}}>STEP <span style={{fontWeight:'bolder'}}>1</span> OF <span style={{fontWeight:'bold'}}>3</span></div>
        <div style={{fontSize:'2rem',fontWeight:'500' ,  color: '#333'}}>Create a password to start<br /> your membership</div>
        <div style={{marginTop:'10px',fontSize:'large'}}>just a few more steps and you're done! <br /> We hate paperwork,too.</div>
        <div>
          <input type="text"  style={{width:'400px',height:'50px',marginTop:'15px',paddingInline:'10px'}} placeholder="Enter Name" onChange={(e)=>setUsername(e.target.value)}/>
          <input type="text"  style={{width:'400px',height:'50px',marginTop:'15px',paddingInline:'10px'}} placeholder="Enter Email" onChange={(e)=>setUserEmail(e.target.value)}/>
          <input type="password"  style={{width:'400px',height:'50px',marginTop:'15px',paddingInline:'10px'}} placeholder="Add a password" onChange={(e)=>setUserPassword(e.target.value)}/>
          <button onClick={buttonClickNext} style={{width:'425px',height:'57px',marginTop:'15px',backgroundColor:'red',border:'none',borderRadius:'3px',fontSize:'1.7rem' ,color:'white'}}>Next</button>
        </div>
      </div>
  
    </>
  );
}
