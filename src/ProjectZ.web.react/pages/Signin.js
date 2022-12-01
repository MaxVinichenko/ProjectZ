//import all from components 
//html for the sign in form 
import React from "react"

function Signin(){
    return(

    <body>
        
           
        <div className="signin">
            <div className= "X-btn" >
                <a calssName="X-letter" href="/">X</a>
            </div>
            <form>
                <label for="fname">First name:</label><br></br>
                <input type="text" id="fname" name="fname"></input><br></br>
                <label for="lname">Last name:</label><br></br>
                <input type="text" id="lname" name="lname"></input><br></br>
                <button className="submit-btn" type ="submit"> Continue</button>
            </form>
        </div>
    </body>
    ); 
}

export default Signin;