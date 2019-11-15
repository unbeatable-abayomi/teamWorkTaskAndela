import React from 'react';
import logo from './image/m-symbol-on-orange.jpg';
import Navbar from './Navbar';

export default function Profile() {
    return (
        <div>
            <form>
            <Navbar/>
            <div className="div-profileForm">
                <label for="title"><p>Title</p></label>
             <input type="text" placeholder='Title of your article' required/>
                <label for="message"><p>Message</p></label>
               <textarea name="message" rows="20" cols="50">The cat was playing in the garden.</textarea>
              <label for="gifs"><p>Post your Gifs</p></label>
               <input type='text' placeholder='gifs url' />
                <input className='submit-button-profile' type='submit'/>
            </div>
            
            </form>
        </div>
    )
}
