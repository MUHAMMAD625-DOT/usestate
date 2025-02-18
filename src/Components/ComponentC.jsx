import React, { useState } from 'react'

function ComponentC() {
   const [Data , setData] =  useState({
    name:"",
    email:""
   });
   const  handleChange = (e) =>{
    
    // const name = e.target.name;
    // const value = e.target.value;
    const {name,value} = e.target;
    const new_value = (name === "email") ? value.toLowerCase(): value;
    console.log(e.target);
    setData ((prev)=>{
        return {
            ...prev,[name]:new_value
        }
    });
    
    
   }
   const submithandle = (e) =>{
    e.preventDefault();
    console.log(Data);
    
   }
  return (
    <div>
      <form onSubmit={submithandle}>
        <label htmlFor="">enter name:</label>
        <input type="text" onChange={handleChange} placeholder='enter name'value={Data.name} name='name'className='border' />
        <br /><br />
        <label htmlFor="">enter Email:</label>
        <input type="text " name='email' onChange={handleChange} placeholder='enter email' value={Data.email} className='border'/>
        <input type="submit" value="submit"  className='border'/>
      </form>
    </div>
  )
}

export default ComponentC
