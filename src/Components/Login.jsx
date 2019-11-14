import React from 'react'

export default function Login() {
    return (
        <div>
            <h1>From test Compomnet</h1>
            <form>
            <h3>Welcome</h3>
            <p>Existing User Kindly Log in your details below</p>
            <p>New User Kindly Sign Up Here</p>
            <input type='text' placeholder='username or email'/>
            <input type='password' placeholder='passworc'/>
            <input type='submit'/>
            </form>
        </div>
    )
}
