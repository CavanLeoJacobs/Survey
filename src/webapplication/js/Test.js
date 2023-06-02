


function Test(){
  let name =sessionStorage.getItem('name');
      let surname = sessionStorage.getItem('surname');
      let age = sessionStorage.getItem('age');
      let email = sessionStorage.getItem('email');
      let gender = sessionStorage.getItem('gender');
      let dateOfBirth = sessionStorage.getItem('dateOfBirth');
      let phoneNumber = sessionStorage.getItem('phoneNumber');

function myFunction() {
  let table = document.getElementById("myTable");
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
   let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
   let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
   let cell7 = row.insertCell(6);



  cell1.innerHTML = {name};
  cell2.innerHTML = {surname};
  cell3.innerHTML = {age};
  cell4.innerHTML = {email};
  cell5.innerHTML = {gender};
  cell6.innerHTML = {dateOfBirth};
  cell7.innerHTML = {phoneNumber};
  return(
<>

      </>
  );

}
return(

<>
<div  id="myTable">
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
</table>
</div>
<button type="button" onClick={()=>myFunction()}>Try it</button>
</>
);

}

export default Test;
