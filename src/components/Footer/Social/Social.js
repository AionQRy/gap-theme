import React from 'react'
import { SocialStyle } from "./Social.styles";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  LineIcon,
} from "react-share";

const Social = ( {socialFooter} ) => {
  return (
      <SocialStyle> 
          <ul>
        { /*Linkedin*/ }
          {socialFooter.map((sfloads) => (
              sfloads.mso.social.linkedin.length !== 0 ? (
                <li className="list-social linkedin">
                    <a href={sfloads.mso.social.linkedin}  target="_blank" rel="noopener noreferrer">
                      <LinkedinIcon size={24} iconFillColor='#262626'/>                            
                    </a>
                </li>    
              ) : null              
            )       
          )}
        
        { /*Facebook*/ }
          {socialFooter.map((sfloads) => (
              sfloads.mso.social.facebook.length !== 0 ? (
                <li className="list-social facebook">
                    <a href={sfloads.mso.social.facebook}  target="_blank" rel="noopener noreferrer">
                    <FacebookIcon size={24} iconFillColor='#262626'/>                              
                    </a>
                </li>    
              ) : null              
            )       
          )}

        { /*Line*/ }
          {socialFooter.map((sfloadline) => (
              sfloadline.mso.social.line.length !== 0 ? (
                <li className="list-social line">
                    <a href={sfloadline.mso.social.line}  target="_blank" rel="noopener noreferrer">
                    <LineIcon size={24} iconFillColor='#262626'/>  
                    </a>
                </li>  
              ) : null              
            )       
          )}
        { /*telegram*/ }
          {socialFooter.map((sfloadtg) => (
              sfloadtg.mso.social.telegram.length !== 0 ? (
                <li className="list-social telegram">
                    <a href={sfloadtg.mso.social.telegram}  target="_blank" rel="noopener noreferrer">
                    <TelegramIcon size={24} iconFillColor='#262626'/>   
                    </a>
                </li> 
              ) : null              
            )       
          )}

        { /*twitter*/ }
          {socialFooter.map((sfloadtg) => (
              sfloadtg.mso.social.twitter.length !== 0 ? (
                <li className="list-social twitter">
                    <a href={sfloadtg.mso.social.twitter}  target="_blank" rel="noopener noreferrer">
                    <TwitterIcon size={24} iconFillColor='#262626'/>   
                    </a>
                </li>
              ) : null              
            )       
          )}
</ul>      
</SocialStyle> 
  )
}

export default Social