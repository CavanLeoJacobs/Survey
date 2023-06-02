import React, { useState } from 'react';
import axios from 'axios';

function Registering()
{
return(
<>
<header>
     <div className="navbar">
     <a className ="active1" href="./LogIn"> Login</a>
     </div>
</header>
<br/> <br/> <br/> <br/>
     <MyForm/>
     <br/> <br/> <br/> <br/>
<footer>

</footer>
</>
);
}

function MyForm()
    {

            const[ name         ,setName] =useState("");
            const[ surname      ,setSurname]= useState("");
            const[ age          ,setAge]= useState(null);
            const[ phoneNumber  ,setPhoneNumber]= useState("");
            const[ dateOfBirth  ,setDateOfBirth]= useState(Date);
            const[ email        ,setEmail] =useState("");
            const[ gender       ,setGender]= useState("");
            const[ password     ,setPassword]= useState("");

          sessionStorage.setItem( "name",name);
          sessionStorage.setItem( "surname",surname);
          sessionStorage.setItem( "age",age);
          sessionStorage.setItem( "phoneNumber",phoneNumber);
          sessionStorage.setItem( "dateOfBirth",dateOfBirth);
          sessionStorage.setItem( "email",email);
          sessionStorage.setItem( "gender",gender);
          sessionStorage.setItem( "password",password);

         const handleNameChange=(event)=>{
               setName(event.target.value);
               };
        const handleSurnameChange=(event)=>{
        setSurname(event.target.value);
        };
        const handleAgeChange=(event)=>{
        setAge(event.target.value);
        };
        const handledDateOfBirthChange=(event)=>{
        setDateOfBirth(event.target.value);

        };
        const handledEmailChange=(event)=>{
        setEmail(event.target.value);

        };
        const handledGenderChange=(event)=>{
        setGender(event.target.value);

        };
        const handledPhoneNumberChange=(event)=>{
        setPhoneNumber(event.target.value);

        };
        const handledPasswordChange=(event)=>{
        setPassword(event.target.value);

        };


        const handleSubmit= (event)=>{
        event.preventDefault();
         const answered={name,surname,age,phoneNumber,dateOfBirth,email,gender,password};
         console.log(name,surname,age,phoneNumber,dateOfBirth,email,gender,password);


            axios.post('http://localhost:3000/login',answered)
            .then((response)=>{
            console.log(response.data);
            setName("");
            setSurname("");
            setAge("");
            setPhoneNumber("");
            setDateOfBirth("");
            setEmail("");
            setGender("");
            setPassword("");
            }).catch((error)=>{
            console.log(error);
            });
        }

return(
<>

   <form action="/Login">
   <label htmlFor="name">Enter your name?</label>
   <input type="test" id="name" name="name" onChange={ handleNameChange } />
   <br/> <br/>
   <label htmlFor="surname">Enter your surname?</label>
   <input type="test" id="surname"  name="surname" onChange={ handleSurnameChange}/>
   <br/> <br/>
   <label htmlFor="age">Enter your age?</label>
   <input type="number" id="age" name="age" onChange={ handleAgeChange }/> <br/> <br/>
   <label htmlFor="email">Enter your email?</label>
   <input type="email" id="email" name="email"  onChange={handledEmailChange }/>
   <br/> <br/>
   <input type="radio" id="female" name="gender" value="female" onChange={ handledGenderChange }/>
   <label htmlFor="gender">FeMale</label>
   <input type="radio" id="male" name="gender" value="male" onChange={ handledGenderChange }/>
   <label htmlFor="gender">Male</label>
   <br/> <br/>
   <label htmlFor="dateOfBirth"> Enter your date of Birth</label>
   <input type="date" id="dateOfBirth" name="dateOfBirth" onChange={handledDateOfBirthChange }/>
   <br/> <br/>
   <label htmlFor="phoneNumber"> Enter your phone number:</label>
   <input type ="tel" id="phoneNumber" name="phoneNumber" onChange={handledPhoneNumberChange  }/>
   <br/> <br/>
   <label htmlFor="password">enter your user password</label>
   <input type="password" id="password" name="password" onChange={ handledPasswordChange }/>
   <br/> <br/>

 <input onChange={handleSubmit} defaultValue  ="Submit" type ="Submit" id="Submit" onClick={()=>handleSubmit()}/>

   &nbsp; &nbsp; &nbsp; &nbsp;
   <input value ="Reset" type ="Reset" id ="Reset"/>
   </form>

</>
);

}

export default Registering;

