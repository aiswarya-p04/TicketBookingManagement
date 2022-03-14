import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import './RegisterForm.css'

const RegisterForm = () => {

    const [UserRegistration, setUserRegistration] = useState({
        UserName: "",
        EmailId: "",
        Password: "",
        MobNo: "",
        DOB: ""
    });
    const [records , setRecords]= useState([]);

    const InputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value)
        setUserRegistration({ ...UserRegistration, [name]: value })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log("Register")

        const newRecords={...UserRegistration,id:nanoid()} 

        setRecords([...records,newRecords])
        // console.log(records)
        setUserRegistration({UserName: "",
        EmailId: "",
        Password: "",
        MobNo: "",
        DOB: ""})
    }


    return (
        <div className='RegisterForm'>
            <hr />
            <h2>Registration Form</h2>
            <form action="" onSubmit={onSubmitHandler}>
                <label htmlFor="UserName">UserName</label>
                <input type="text"
                    name="UserName"
                    id="UserName"
                    value={UserRegistration.UserName}
                    onChange={InputHandler}
                    placeholder="Enter your name"
                    required
                />
                <label htmlFor="EmailId">Email Id</label>
                <input type="email"
                    name="EmailId"
                    id="EmailId"
                    value={UserRegistration.EmailId}
                    onChange={InputHandler}
                    placeholder="Enter your email id"
                    required
                />

                <label htmlFor="Password">Password</label>
                <input type="password"
                    name="Password"
                    id="Password"
                    value={UserRegistration.Password}
                    onChange={InputHandler}
                    placeholder="Enter your password"
                    required
                />

                <label htmlFor="MobNo">Mobile Number</label>
                <input type="tel"
                    name="MobNo"
                    id="MobNo"
                    value={UserRegistration.MobNo}
                    onChange={InputHandler}
                    placeholder="Enter your Mobile Number"
                    required
                />

                <label htmlFor="DOB">Date of Birth</label>
                <input type="date"
                    name="DOB"
                    id="DOB"
                    value={UserRegistration.DOB}
                    onChange={InputHandler}
                    placeholder="Enter your Mobile Number"
                    required

                />

                <button type='submit' className='Submit-btn'>Register</button>


                <div>
        {
          records.map((curElem)=>{
            return(
              <div className='showData' key={nanoid()} >

                <p>{curElem.UserName}</p>
                <p>{curElem.EmailId}</p>
                <p>{curElem.Password}</p>
                <p>{curElem.MobNo}</p>
                <p>{curElem.DOB}</p>
                </div>
            )
          })
        }
      </div>

            </form>
        </div>
    )
}

export default RegisterForm
