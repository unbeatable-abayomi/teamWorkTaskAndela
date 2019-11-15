import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar'


export default class SignUp extends Component {
    render() {
        return (
            
            <div className='conatiner-signup'>
            <Navbar/>
            <form>
               <div className='form-container'>
               <h1>Sign Up</h1>
               <p>Please fill in this form to create an account.</p>
               <hr/>
               <label for="email"><b>Email</b></label>
               <input type="email" placeholder="Enter Email" name="email" required />
           
               <label for="psw"><b>Password</b></label>
               <input type="password" placeholder="Enter Password" name="psw" required />
        
               <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
              
            <label>
            <input type="checkbox" checked="checked" name="remember"/> Remember me
          </label>
          <p>By creating an account you agree to our <a href="htt">Terms & Privacy</a>.</p>
            
          <div class="clearfix">
        <Link to='/'> <button type="button" class="cancelbtn">Cancel</button> </Link>
          <button type="submit" class="signupbtn">submit</button>
        </div>
          </div>
            </form>
            </div>
     
    
        )
    }
}
