// import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';
 function App() {
  const INITIAL_USERS=[{
  name:"Username:Amarnath",
  place:"Place:Vadalur",
  picture:"https://wallpaperaccess.com/full/2213424.jpg",
  ambition:"Ambition:Full stack developer",
  age:"Age:27",
  },
    {
      name:"Name:Raji",
      picture:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      place:"Place:Chennai",
      ambition:"Ambition:Singer",
      age:"Age:26",
      
       },
           {
      name:"Name:Solomon",
      picture:"https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
      place:"Place:Mumbai",
      ambition:"Ambition:International cricket player",
      age:"Age:42",
       },
          
    {   name:"Name:Tom",
    picture:"https://images.squarespace-cdn.com/content/v1/52d4b597e4b086fdf73bc331/1390329989595-6Z392WLP0CCOI89L3KMM/_MG_5933.jpg?format=1000w",
      place:"Place:California",
      ambition:"Ambition:Director",
      age:"Age:32",
      
       },
        {
      name:"Name:Edwins",
      picture:"https://i.insider.com/569d1bd8e6183e9d408b9e95?width=1000&format=jpeg&auto=webp",
      place:"Place:Russia",
      ambition:"Ambition:Astronaut",
      age:"Age:35",
       }];
       const[name,setName]=useState("");
       const[picture,setPicture]=useState("");
       const[place,setPlace]=useState("");
       const[ambition,setAmbition]=useState("");
       const[age,setAge]=useState("");
       const[users,setUsers]=useState(INITIAL_USERS);
       
       const addUser=()=>{
         console.log("Adding Users",name,picture,place,ambition,age);
         const newUser={
           name,
           picture,
           place,
           ambition,
           age
       };
         console.log(newUser);
         setUsers([...users,newUser])
       };
      
  return (
    <div className="App  ">  
    <div>
    <h1 className="front">Hello All !!! Welcome to USers Page</h1>
    <p className="community">A community to add new users👨🏽‍🤝‍👨🏽👨🏽‍🤝‍👨🏽</p>
    </div>
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
    
    <Button className="add-button" onClick={addUser} variant="outlined">Add User</Button>
   
</div>

   
  <UsersList users={users}/>   
  
    </div>
  );
}


function Users({name,place,picture,ambition,age}){
  return(
    
  
    <Card  className="user-container">
   <img  className="img-container"src={picture} alt={name}/>
   <div className="details-container">
    <p>{name}</p>
    <p>{place}</p>
    <p>{ambition}</p>
    <p>{age}</p>
    </div>
    </Card>
    

  )
}



function UsersList({users}){
return(
  
  
  <div>
  {users.map((ur)=>(
      
    <Users
    picture={ur.picture}
    name={ur.name}
   place={ur.place}
   ambition={ur.ambition}
   age={ur.age}
   />
  ))}
  </div>
)
}

export default App;
