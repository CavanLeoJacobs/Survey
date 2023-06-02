import React from 'react';

import Home from './Home.js';
import {Routes, Route, useNavigate} from 'react-router-dom';

 function App() {
  const navigate = useNavigate();
  const navigateToContacts = () => {
  navigate('/Home');
  };
  const navigateHome = () => {
  navigate('/');
  };

  return (
    <div>
    <button onClick={navigateHome}>Home</button>
    <hr/>
    <button onClick={navigateToContacts}>Contacts</button>
    <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/" element={ <Home />} />
    </Routes>
    </div>
);
}
    let name='';
    let password='';
function Login(){

function handleSubmit(){
    console.log({name,password});
    console.log("\n");
    sessionStorage.setItem( "name1",name);
    sessionStorage.setItem( "password1",password);
}
        return(
    <>
<header>
    <div className="navbar">
    <a className="active1" href="./Registering"> New User</a>
    </div>
</header>
    <br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <form action="/ViewProfile">
    <label htmlFor="name">Enter your name?</label>
    <input type="test" id="name" name="name" onChange={ (event) => { name = event.target.value} }/>
    <br/> <br/>
    <label htmlFor="password">enter your user password  </label>
    <input type="password" id="password" name="password" onChange={ (event) => { password = event.target.value} }/>
    <br/><br/>
    <input value ="Submit" type ="Submit" id="Submit" onClick={()=>handleSubmit()}/>
    <br/><br/>
    <input value ="Reset" type ="Reset" id ="Reset"/>
    </form>
<footer>

</footer>
    </>
);
}
function MyButton() {

  return (
  <>
  <div className ="Welcome">
  <br/> <br/>
  <button type= 'submit'>
  Submit
  </button>
  <br/><br/>
  <button type= 'reset'>
  Reset
  </button>
  <br/><br/>
  </div>
  </>
  );
}

export default Login;
export {MyButton,App};