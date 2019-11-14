import React from 'react'
import {Link} from 'react-router-dom';
import logo from './image/m-symbol-on-orange.jpg'

export default function Navbar() {
    return (
        <div>
            
            <div className='navbar-items'>
              <div className='navbar-image'>
                <a href='htt' className='image-logo-text'>  <img src={logo} className='image-logo' alt="logo"/> mingle</a>
             </div>
           <div className='navbar-sign-in_log-in'>
       <Link to='/SignUp'> <input type='button' value='sign up'/> </Link> 
              <input type='button' value='log in'/>
            </div>
            </div>
        </div>
    )
}
