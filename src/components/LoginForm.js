import React, { useState } from 'react'
import './LoginForm.css'
import { nanoid } from "nanoid";


const LoginForm = () => {

// initialize the email id and password as empty 

  const [userLogin, setuserLogin] = useState({
    emailId: "",
    password: ""
  })

  const [records,setrecords]=useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Submit')


// enter the userlogin details to newRecords


    const newRecords= {...userLogin,id : nanoid()}
    //  console.log(newRecords);
    // console.log(records)


// add the newly added detailss(newRecords) to the records

setrecords([...records,newRecords])


// finally set the fields empty after clicking on sumit button for good user experience 

setuserLogin({emailId:"", password:""})


  }
  const handleInput = (e) => {
    //     console.log(e.target.name)
    //  console.log(e.target.value)
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value)


    setuserLogin({ ...userLogin, [name]: value })
  }
  return (

  // login form


    <div className='LoginForm'>
      <h2>Login Form</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="emailId">Email Id</label>
        <input type="email"
          id='emailId' name='emailId'
          value={userLogin.emailId}
          onChange={handleInput}
          placeholder='Enter your Email' autoComplete='off' required />
        <label htmlFor="password">Password</label>
        <input type="password"
          id='password'
          name='password'
          value={userLogin.password}
          onChange={handleInput}
          placeholder='Enter password' required />
        <button type='submit' className='Submit-btn'>Login</button>
      </form>


{/* print the data entered */}

      <div>
        {
          records.map((curElem)=>{
            return(
              <div className='showData' key={nanoid()} >

                <p>{curElem.emailId}</p>
                <p>{curElem.password}</p>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LoginForm
