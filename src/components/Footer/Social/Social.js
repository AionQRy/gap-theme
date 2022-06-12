import React from 'react'
import { SocialStyle } from "./Social.styles";

const Social = ( {socialFooter} ) => {
  return (
      <SocialStyle> 
          <ul>
        { /*Linkedin*/ }
          {socialFooter.map((sfloads) => (
              sfloads.mso.social.linkedin.length !== 0 ? (
                <li className="list-social linkedin">
                    <a href={sfloads.mso.social.linkedin} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>                            
                    </a>
                </li>    
              ) : null              
            )       
          )}
        
        { /*Facebook*/ }
          {socialFooter.map((sfloads) => (
              sfloads.mso.social.facebook.length !== 0 ? (
                <li className="list-social facebook">
                    <a href={sfloads.mso.social.facebook} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>                            
                    </a>
                </li>    
              ) : null              
            )       
          )}

        { /*Line*/ }
          {socialFooter.map((sfloadline) => (
              sfloadline.mso.social.line.length !== 0 ? (
                <li className="list-social line">
                    <a href={sfloadline.mso.social.line} target="_blank">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988-2.595c.129 0 .234.105.234.234v4.153h2.287c.129 0 .233.104.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.119-.025-.161-.065l-.001-.001-.002-.002-.001-.001-.003-.003c-.04-.042-.065-.099-.065-.161v-5.229c0-.129.104-.234.233-.234h.842zm14.992 0c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.883h2.287c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.884h2.287c.129 0 .233.105.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.12-.025-.162-.065l-.003-.004-.003-.003c-.04-.042-.066-.099-.066-.161v-5.229c0-.062.025-.119.065-.161l.004-.004.003-.003c.042-.04.099-.066.162-.066h3.363zm-10.442.001c.129 0 .234.104.234.233v5.229c0 .128-.105.233-.234.233h-.842c-.129 0-.234-.105-.234-.233v-5.229c0-.129.105-.233.234-.233h.842zm2.127 0h.008l.012.001.013.001.01.001.013.003.008.003.014.004.008.003.013.006.007.003.013.007.007.004.012.009.006.004.013.011.004.004.014.014.002.002.018.023 2.396 3.236v-3.106c0-.129.105-.233.234-.233h.841c.13 0 .234.104.234.233v5.229c0 .128-.104.233-.234.233h-.841l-.06-.008-.004-.001-.015-.005-.007-.003-.012-.004-.011-.006-.007-.003-.014-.009-.002-.002-.06-.058-2.399-3.24v3.106c0 .128-.104.233-.234.233h-.841c-.129 0-.234-.105-.234-.233v-5.229c0-.129.105-.233.234-.233h.841z"/></svg>
                    </a>
                </li>  
              ) : null              
            )       
          )}
        { /*telegram*/ }
          {socialFooter.map((sfloadtg) => (
              sfloadtg.mso.social.telegram.length !== 0 ? (
                <li className="list-social telegram">
                    <a href={sfloadtg.mso.social.telegram} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333334 333334" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm80219 91205l-29735 149919s-4158 10396-15594 5404l-68410-53854s76104-68409 79222-71320c3119-2911 2079-3534 2079-3534 207-3535-5614 0-5614 0l-100846 64043-42002-14140s-6446-2288-7069-7277c-624-4992 7277-7694 7277-7694l166970-65498s13722-6030 13722 3951zm-87637 122889l-27141 24745s-2122 1609-4443 601l5197-45965 26387 20619z"></path></svg>  
                    </a>
                </li> 
              ) : null              
            )       
          )}

        { /*twitter*/ }
          {socialFooter.map((sfloadtg) => (
              sfloadtg.mso.social.twitter.length !== 0 ? (
                <li className="list-social twitter">
                    <a href={sfloadtg.mso.social.twitter} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
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