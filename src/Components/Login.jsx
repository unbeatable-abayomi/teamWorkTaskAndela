import React from 'react'


export default function Login() {
    return (
        <div>
           
            <form>
            <div className='login-form'>
            <h3>Welcome</h3>
            <p>Existing User Kindly Log in your details below</p>
            <p>New User Kindly Sign Up Here</p>
            <input type='email' name="email" placeholder='username or email'/>
            <input type='password' placeholder='password' name="pwd"/>
            <input type='submit'/>
            </div>
            </form>
        </div>
    )
}
