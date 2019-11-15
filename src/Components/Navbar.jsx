import React from 'react'
import {Link} from 'react-router-dom';
import logo from './image/m-symbol-on-orange.jpg'

export default function Navbar() {
    return (
        <div>
            
            <div className='navbar-items'>
              <div className='navbar-image'>
              <img src={logo} className='image-logo' alt="logo"/>
               <p> <Link  to='./' className='image-logo-text'> mingle</Link> </p>
             </div>
           <div className='navbar-sign-in_log-in'>
             
             
            </div>
            </div>
        </div>
    )
}
