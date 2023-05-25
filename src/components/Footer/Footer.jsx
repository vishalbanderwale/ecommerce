 import React from "react";
 import "./Footer.css"
 import { faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


 function Footer(){
     return(
         <footer>
         <div className="footer-main-container">
           <p className="footer-para">connect with us</p>
              <ul className="footer-unordered-list" >
            
               <li><a href="#1"><FontAwesomeIcon icon={faTwitter} /> </a></li>
               <li><a href="#2#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                 <li><a href="#3"><FontAwesomeIcon icon={faGithub} /></a></li>
            
            </ul>   
        </div>
         </footer>
     )
 }
 export default Footer