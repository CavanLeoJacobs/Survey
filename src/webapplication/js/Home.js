import React from 'react';

function Home() {
 let name =sessionStorage.getItem('name');
 let surname = sessionStorage.getItem('surname');
 let email = sessionStorage.getItem('email');
 return (
<div>
<header>
    <div className="navbar">
    <a className="active" href="/ViewProfile">
    View Profile
    </a>
    <a className="active1" href="/Registering">
    New User
    </a>
    <a className="active" href="/Login">
    LogOut
    </a>
    </div>
</header>
    <br/> <br/> <br/>
    <div className="WelcomeEmail">
    {email}
    </div>
    <div className="Welcome"> <h1>
    Welcome
    </h1> </div>
    <h2>
    <div className="Welcome">
    {name} {surname}
    <br/>
    YOU HAVE SUCCESSFULLY COMPLETED THE FORM YOU MAY EXIT!!
    </div>
    </h2>
    <br/> <br/>
<footer>
    <div className="navbar">
    <a className="active" href="/DataBase">
    View DataBase
    </a>
    </div>
</footer>
</div>
);
}


export default Home;