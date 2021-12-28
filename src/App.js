
import './App.css';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
 import IconButton from '@mui/material/IconButton';
 import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useHistory,useParams } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
// import { EditUsers } from './EditUsers';import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

 function App() {
  
  const INITIAL_USERS=[{
  name:"Username:George",
  place:"Place:Sydney",
  picture:"https://www.teahub.io/photos/full/49-497202_football-players-wallpapers-hd.jpg",
  ambition:"Ambition:Football-Player",
  age:"Age:22",
  },
    {
      name:"Name:Robert",
      picture:"https://media.istockphoto.com/photos/high-school-students-raising-hands-on-a-class-picture-id1177608272?k=20&m=1177608272&s=612x612&w=0&h=F7kr3P89Uw7SuXpbfTN-mHFlXOHtCOjghwV76sxD1vM=",
      place:"Place:Malaysia",
      ambition:"Ambition:Professor",
      age:"Age:26",
      
       },
           {
      name:"Name:Silvester",
      picture:"https://media.istockphoto.com/photos/focused-young-artist-playing-electric-piano-picture-id888275014?k=20&m=888275014&s=612x612&w=0&h=8HjWcjGJQWeTGsHzJw1-g7EX7xe7AT7pk47daKmkynQ=",
      place:"Place:Canada",
      ambition:"Ambition:Music-Composer",
      age:"Age:25",
       },
          
    {   name:"Name:Catherine",
    picture:"https://startupmindset.com/wp-content/uploads/2015/01/rsz_driven_female_enterpreneur-780x528.jpg",
      place:"Place:California",
      ambition:"Ambition:Enterprenuer",
      age:"Age:21",
      
       },
        {
      name:"Name:Elysaa",
      picture:"https://st2.depositphotos.com/10614052/i/600/depositphotos_441478022-stock-photo-female-doctor-sitting-table-clinic.jpg",
      place:"Place:spain",
      ambition:"Ambition:Doctor",
      age:"Age:25",
       }];
       
      const history=useHistory();
      const[mode,setMode]=useState("dark");
       const[name,setName]=useState("");
       const[picture,setPicture]=useState("");
       const[place,setPlace]=useState("");
       const[ambition,setAmbition]  =useState("");
       const[age,setAge]=useState("");
       const [users,setUsers]=useState(INITIAL_USERS);
     
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
     
        
       const theme = createTheme({
        palette: {
          mode: mode,
        },
      });
      
  return (
    <ThemeProvider theme={theme}>
    

    <div className="App  "> 
    
    <AppBar position="static" style={{marginBottom:"20px" }}>
  <Toolbar variant="dense">
  <Button onClick={()=>history.push("/home")} variant="text" color="inherit">Home</Button>
  <Button onClick={()=>history.push("/users")} variant="text" color="inherit">Users</Button>
  <Button startIcon= {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}onClick={()=>setMode(mode==="dark"? "light": "dark")} style={{marginLeft:"auto"}} variant="text" color="inherit">{mode==="light"?"Dark":"Light"}mode</Button>
  
  </Toolbar>
</AppBar>
 
   
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
     
     <Button className="add-button" onClick={addUser} variant="outlined" style={{color:"blue"}}>Add User</Button>
    
  </div>
  <Switch>
  <Route path="/home">
  <Home/>
  </Route>
   
    <Route exact path="/users/:id">
    <UserDetails users={users}/>
    </Route>
  
    <Route exact path="/users">
    <UsersList users={users} setUsers={setUsers}/>
    </Route>
    <Route path="**">
    <NotFound/>
    </Route>
    </Switch>
</div>

</ThemeProvider>
  )
    
}
function   NotFound() {
  return(
    <div>
    <img src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt="not found 404" className='notfound'/>
    </div>
  )
}
function UserDetails({users}){
  const{id}=useParams();
  const user=users[id];
  console.log(user);
  return(
  <h1>User Details{user.name}</h1>
  )
}
function Home(){
return(
  <div className="home">
  <h1 className="front">Hello All !!! Welcome to USers Page</h1>
    <p className="community">A community to add new and delete users👨🏽‍🤝‍👨🏽👨🏽‍🤝‍👨🏽</p>

  </div>
)
}
  



 function Users({name,place,picture,ambition,age,id,deleteButton,editButton}){
 const history=useHistory();
 
   return(
    
  
     <Card  className="user-container">
    <img  className="img-container"src={picture} alt={name}/>
    <div className="details-container">
     <p>{name}</p>
     <p>{place}</p>
     <p>{ambition}</p>
     <p>{age}</p>
     {deleteButton}
    
   
    
   
     </div>
     </Card>
    

   )
 }
function UsersList({users,setUsers}){
 const history=useHistory("");
return(
  
  
  <div >
  {users.map(({name,picture,place,ambition,age},index)=>(
      
    <Users
    key={index}
    picture={picture}
    name={name}
   place={place}
   ambition={ambition}
   age={age}
   id={index}
 deleteButton={  <IconButton 
  onClick={()=>{
    console.log("Deleting",index);
    const deleteIdx=index;
   const remainingUsers= users.filter((ur,idx)=>idx!==deleteIdx);
   console.log("Remaining",remainingUsers);
   setUsers(remainingUsers);
   
  }}
  aria-label="delete" color="error">
  <DeleteIcon />
</IconButton>
  }


    />
  ))} 
 
  </div>
   
   


  )

}
export default App;
