import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export function EditUsers({users,setUsers}) {
  
  
  const[name,setName]=useState("");
  const[picture,setPicture]=useState("");
  const[place,setPlace]=useState("");
  const[ambition,setAmbition]  =useState("");
  const[age,setAge]=useState("");
  
  
  const addUser=()=>{
    console.log("Adding Users",name,picture,place,ambition,age);
    const newUser={
      name,
      picture,
      place,
      ambition,
      age,
  };
    console.log(newUser);
    setUsers([...users,newUser])
  };
  
  
  
  
  return (
    <div className="add-user">
   
    <TextField 
    value={name}
    onChange={(event)=>setName(event.target.value)}
  placeholder="Enter Your Name"
  variant="standard" />
  
      <TextField 
       value={picture}
     onChange={(event)=>setPicture(event.target.value)}
     placeholder="Enter Your Picture"
     variant="standard"
     />
     <TextField
     value={place}
     onChange={(event)=>setPlace(event.target.value)}
     placeholder="Enter Your Place"
     variant="standard"
     />
     <TextField
     value={ambition}
     onChange={(event)=>setAmbition(event.target.value)}
     placeholder="Enter Your Ambition"
     variant="standard"
     />
     <TextField
     value={age}
     onChange={(event)=>setAge(event.target.value)}
     placeholder="Enter Your Age"
     variant="standard"
     />
     
     <Button  className="edit-button" onClick={addUser} variant="outlined">Add User</Button>
    
  </div> 
  );
}
