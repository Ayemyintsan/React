import React, { useState } from 'react';

const Login = () => {
const [username,SetUserName] = useState("")
const [password,SetPassword] = useState("")

const passwordHandler =(event) =>{
    console.log("Type Password:" +event.target.value)
    SetPassword(event.target.value)
}
const submitHandler = (e)=>{
    e.preventDefault();
    console.log (`Username: ${username} Password:${password}`)
}
    return (
        <div >
            <h2>Login Form</h2>
            <form onSubmit={submitHandler}>
            <label>UserName</label><input type="text" placeholder="username" value={username} 
            onChange={(event)=> {
                console.log("Type value:" +event.target.value)
                SetUserName(event.target.value)
            }}/> 
            <br />
            <label>Password</label><input type="password" placeholder='password' value={password} 
            onChange={passwordHandler}
            /> <br /><br />
            {/* <button type='button' onClick={submitHandler}>Submit</button> */}
            <button type='submit'>Submit</button>
            </form>
        </div>

    );
}

export default Login;
