//import all from components 
import React from "react"
function Signin(){
    return(
        <div>
        <form>
        <label for="fname">First name:</label><br></br>
        <input type="text" id="fname" name="fname"></input><br></br>
        <label for="lname">Last name:</label><br></br>
        <input type="text" id="lname" name="lname"></input>
        </form>
        </div>
    ); 
}

export default Signin;