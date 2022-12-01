//import all from components 
//html for the sign in form 
import React from "react"

function Signin(){
    return(
    <div className="box">
        <div className="border">
            <h1>Sign In</h1>
            <div className="container">
                <div className= "X-btn" >
                    <a calssName="X-letter" href="/">X</a>
                </div>
                <form  target="_blank" action="" method="POST">   
                    <input type="text" className="textbar signin-bar" placeholder="Email" required/> 
                    <input type="email" className="textbar signin-bar" placeholder="Password" required/>
                    <button type="submit" className="submit-btn">Submit Form</button>
                </form>
            </div>
        </div>
    </div>
    ); 
}

export default Signin;