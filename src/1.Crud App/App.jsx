

import { useState } from 'react'
import "./1.Crud App/App.css"

const App = () => {
  const[open,setOpen]=useState(false)
  const[user,setUser]=useState({ name:"",email:"",address:""})
  const[userData,setUserData]=useState([])
  const[update,setUpdate]=useState(false)
  const[updateIndex,setUpdateIndex]=useState(null);


  
  function openModal(){
    setOpen(true)
  }
  function closeModal(){
    setOpen(false)
    setUser({ name:"",email:"",address:""});
    setUpdate(false);
    setUpdateIndex(null);
  }
  function addUser(){
    if(update){
      const updatedUserData= [ ...userData];
      updatedUserData[updateIndex]=user;
      setUserData(updatedUserData);
      closeModal();
    } else {
      setUserData([...userData,user]);
      closeModal();

    }
    
  }
  function handleDelete(index){
    const del=userData.filter((v,i)=>i!==index)
    setUserData(del)
  }
  function handleUpdate(index){
    setUpdate(true)
    setUpdateIndex(index)
    let a=userData[index]
    setUser(a)
    openModal()
  }
  
  return (
    
    <div className='App'>
      <section className='sec'>
        <h1 className='h11'>Crud App</h1>
        <button className='btn1' onClick={openModal}><b>Add User</b></button>
        

      </section>
      <br />
      <br />
      <hr />
      <br />
      <center>
      <table border={1} rules='all'>
        <thead>
          <tr>
            <td><b>Name</b></td>
            <td><b>Email</b></td>
            <td><b>Address</b></td>

            <td><b>Action</b></td>
          </tr>
        </thead>
        <tbody>
          {userData.length>0 && userData.map((user,index)=>{
            return(
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>

                <td>
                  <button className='btn2' onClick={()=>handleUpdate(index)}>Edit</button>
                  <button className='btn3' onClick={()=>handleDelete(index)}>Delete</button>

                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}><center>@Copyright RupaliSagare</center></td>
          </tr>
        </tfoot>
        

      </table>
      </center>
      <br />

      {open &&(
        <center>
        <form >
          <h1>Enter Your Data</h1>
          <input type="text" placeholder='Enter your name' name='name' value={user.name} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
          <br></br>
          <br></br>
          <input type="email" placeholder='Enter your email' name='email' value={user.email} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
          <br></br>
          <br></br>
          <input type="text" placeholder='Enter your address' name='address' value={user.address} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
          <br></br>
          <br></br>

          <button  className='btn4' onClick={addUser}>{update ? "Update": "Submit"}</button>
        </form>
        </center>
      )}

      
    </div>
  )
  
}

export default App
