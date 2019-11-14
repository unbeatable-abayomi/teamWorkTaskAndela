import React from 'react'

export default function Profile() {
    return (
        <div>
            <form>
            <div className="div-profileForm">
            <label for="title"><b>Title</b></label>
            <input type="text" placeholder='Title of your article' required/>
            <label for="message"><b>Message</b></label>
            <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
            <label for="gifs"><b>Post your Gifs</b></label>
<input type='text' placeholder='gifs url' />
            </div>
            
            </form>
        </div>
    )
}
