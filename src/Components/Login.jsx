import React from 'react';
import {Link} from 'react-router-dom';


export default function Login() {
    return (
        <div>
           
            <form>
            <div className='login-form'>
            <h3>Welcome to Mingle</h3>
            <p>Do you already Have an account with us ?<br/>
            Log in your details below</p>
            <p>New User?<br/>
             Kindly  <Link to='/SignUp'><span className="sign-up-text">Sign Up Here</span> </Link> </p>
            <input type='email' name="email" placeholder='username or email'/>
            <input type='password' placeholder='password' name="pwd"/>
            <input  className='submit-input' type='submit'/>
            <p><a href="http">forgot password?</a></p>
            <Link to='/Profile'> <input type='button' value='profile page'/></Link>
            <p>New User?</p>
            <Link to='/SignUp'> <input className='signUp-input' type='button' value='sign up'/> </Link>
            </div>
           
            </form>
        </div>
    )
}
