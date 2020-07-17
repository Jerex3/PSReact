import React from 'react'
import '../styles/Input.css'

class inputUse extends React.Component {


    
    render()
    {
        return(
            <div class="form-style-8">
            <h2>Insert user information</h2>
            <form>
              <input type="text" name="field1" placeholder="Full Name" />
              <input type="email" name="field2" placeholder="Email" />
              <input type="url" name="field3" placeholder="Website" />
              <textarea placeholder="Message" onkeyup="adjust_textarea(this)"></textarea>
              <input type="button" value="Insert" />
            </form>
          </div>
        )
    }

}


export default inputUse;