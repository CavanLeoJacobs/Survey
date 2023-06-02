      let name1 = sessionStorage.getItem('name1');
      let password1 = sessionStorage.getItem('password1');
      let name = sessionStorage.getItem('name');
      let surname = sessionStorage.getItem('surname');
      let age = sessionStorage.getItem('age');
      let email = sessionStorage.getItem('email');
      let gender = sessionStorage.getItem('gender');
      let dateOfBirth = sessionStorage.getItem('dateOfBirth');
      let phoneNumber = sessionStorage.getItem('phoneNumber');
      let password = sessionStorage.getItem('password');

function ViewProfile()
{
if ((name !== name1 || password !== password1) || (name === "" || name1 === "" || password === "" || password1 === ""))
{
return (
<>
<ErrorHandle/>
</>
);

}
else
{
return (
<>
<ViewProfile1/>
</>
);
}
}
function ErrorHandle()
{
return(
<>
<div className="error">
Please enter username correctly <br/>
Please enter password correctly
<br/> OR <br/>
Please be a user first
<br/> <br/>
<a href="/Login">
Login
</a>
<br/>
<a href="/Registering">
New User
</a>
</div>
</>
);
}

function ViewProfile1()
{
  function ViewData()
  {
    const urlParams = new URLSearchParams(window.location.Registering);
    const userInput = urlParams.get('user-input');
    console.log({name,name1,surname,age,phoneNumber,gender,dateOfBirth,password,password1});
    console.log(userInput);
  }

return (
<>
<header>
 <div className="navbar">

        <a className="active"  href="/Home" > Home </a>
        <a className="active1" href="/Registering"> New User</a>
        <a className="active"  href="/Login"> LogOut</a>

 </div>
</header>
 <br/> <br/> <br/> <br/>
 <ViewData/>

<h2>Name           :  <label>{name}</label></h2>
<h2>Surname        :  <label>{surname}</label></h2>
<h2>Age            :  <label>{age}</label></h2>
<h2>Email          :  <label>{email}</label></h2>
<h2>Gender         :  <label>{gender}</label></h2>
<h2>Date Of Birth  :  <label>{dateOfBirth}</label></h2>
<h2>PhoneNumber    :  <label>{phoneNumber}</label></h2>


<a href="/Home" >Next &raquo;</a>


     <footer>
         <div className="navbar">
            <a className="active" href="/DataBase"> View DataBase</a>
         </div>
     </footer>
</>
);
}

export default ViewProfile;
export  {ViewProfile1};