import React, { useState } from "react";

function Subscribe(){
    const[email,setEmail]=useState("");
    const [message, setMessage] = useState("");

    const emailValidation=()=>{
        const regEx= /[a-zA-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z]{2,8}])?/g
if (regEx.test(email)){
    setMessage("Email Valid");
}else if (!regEx.test(email)&& email!=""){
setMessage("Email Invalid");
}else{
    setMessage("");
}
    };




    const handleOnChange=(e)=>{
setEmail(e.target.value);
    };
    return(
      <section class=" bg-warning ">
         <br>
                </br>
          <div class="container" id="subscribe">
          <br>
                </br>
             
                <h5 class="text-black text-center mb-3 mt-3">To stay updated with monthly Books, Announcements and Competitions, Subscribe below: </h5>
            <div className="subscribe-input">
            <div class="row justify-content-md-center">
      
                <input type='email' placeholder="example@email.com" value={email} onChange={handleOnChange}/>
               
                <button><a href="#" onClick={emailValidation}>Subscribe</a></button>
               
            </div>
            <br>
                </br>
                 <div class="row justify-content-md-center">
            <div className="message">
                {message}
            </div>
            </div>
            </div>
            <br>
                </br>
             
           </div>
        </section>
    )
}

export default Subscribe;   
