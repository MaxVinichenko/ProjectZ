import React from "react"


export default function Contact(){
    return(
<div>
  <div className="container">
    
    <svg className="svghouse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" /></svg>
    <h1>Contact Us</h1>
     
  </div>
  <div className="overallcontact">
    <form  target="_blank" action="https://formsubmit.co/your@email.com" method="POST">
        <div class="form-group">
          <div class="form-row">
            <div className="col">
              <input type="text" className="textbar" placeholder="Full Name" required/>
            </div>
            <div className="col">
              <input type="email" className="textbar" placeholder="Email Address" required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <textarea placeholder="Your Message" className="textbar"  rows="10" required></textarea>
        </div>
        <button type="submit" className="submit">Submit Form</button>
    </form>
  </div>
</div>
    ); 
}



