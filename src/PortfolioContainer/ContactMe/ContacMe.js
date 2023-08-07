import React from "react";
import './ContacMe.css';
import messageImage from "../../assets/MSG.jpg";
import Typical from 'react-typical';


export default function Footer(){
    return(
    <div className="background-container" id="Contact-nav">
        <div className="contact-text">       
        <h1>Contact Me</h1>
        <p>Lets Keep In Touch</p> 
        </div>
        
            <div className="getInTouch-Container">
                 
            <div className="GetInTouch-text">    

            <span className='Changing-text'>
                        {""}
                        <h1>
                           {""}
                           <Typical
                           loop={Infinity}
                           steps={[
                            "Contact Me Today",  //after importing the typical above this alows display after each other
                            1000,                               //2000 means 2seconds
                            "I'm Available",
                            1000,
                            "Link Up with me",
                            1000,
                           ]}
                           /> 
                        </h1>
                    </span>


        <div className='cool-icon'>                            
                          
                    <a href="https://twitter.com/Mighty_scribe" target="_blank">
                        <i className="bi bi-twitter text dark mx-1"></i>
                        </a>
                    <a href="https://web.facebook.com/owolusi?_rdc=1&_rdr" target="_blank">
                        <i className="bi bi-facebook text dark mx-1"></i>
                        </a>
                    <a href="https://www.linkedin.com/in/owolusi-lucky-36b540175/" target="_blank">
                        <i className="bi bi-linkedin text dark mx-1"></i>
                        </a>
                        <a href="https://www.instagram.com/oluwabunmiowolusi/"  target="_blank">
                        <i className="bi bi-instagram text dark mx-1"></i>
                        </a>
                    <a href="https://github.com/Owolusi/" target="_blank">
                        <i className="bi bi-github text dark mx-1"></i>
                        </a>
                    <a href="m.bunmi5@gmail.com">
                        <i className="bi bi-google text dark mx-1"></i>
                        </a>
                      
                        </div>
                        <p>send your mail here</p>  

                        <div className="Message-image">
                        <img src={messageImage} alt="Message" className="Message-image"/>
                        </div>
        

        </div>


        <div className="form-container">
        <form action="https://formsubmit.co/m.bunmi5@email.com" method="POST">
                <label for="login">Name</label>
                <input type="text" id="login"/>
                <label class="Email" for="Email"> Email</label>
                <input type="Email"/>
                <label for="Message">Message</label>
                <input type="text"/>
            </form>      
            <button className="submit-button">Submit</button>           
        </div>
</div>             
</div>
        
    );
}