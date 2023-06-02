import React from 'react';

function DataBase()
{
      let name =sessionStorage.getItem('name');
      let surname = sessionStorage.getItem('surname');
      let age = sessionStorage.getItem('age');
      let email = sessionStorage.getItem('email');
      let gender = sessionStorage.getItem('gender');
      let dateOfBirth = sessionStorage.getItem('dateOfBirth');
      let phoneNumber = sessionStorage.getItem('phoneNumber');


 return (
        <>
    <header>
  <div className="navbar">
  <a className="active1" href="/Home"> Home</a>
  <a className="active" href="/ViewProfile"> View Profile</a>
  <a className="active1" href="/Registering"> New User</a>
  <a className="active" href="/Login"> LogOut</a>
  </div>
</header>
  <br/> <br/> <br/> <br/> <br/> <br/>
  <table>
    <tr>
    <th>Name</th>
    <th>Surname</th>
    <th>Age</th>
    <th>Email</th>
    <th>Gender</th>
    <th>Date Of Birth</th>
    <th>PhoneNumber</th>
    </tr>
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{dateOfBirth}</td>
      <td>{phoneNumber}</td>

      </tr>
      <tr>
      </tr>
     </table>
     <footer>

     </footer>
     </>
 );
}

export default DataBase;