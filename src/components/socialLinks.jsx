import React from 'react';

import Card from './card';


function SocialLinks() {
   return (
      <div className="social" >
         <div className="social-links-container">


            <a href="https://devfolio.co/hackodisha/dashboard"> <Card>
            <div className="box-img-container">
               <img src="./assets/devfolio.png" alt=""></img>
               <span className="box-content"> Apply for Hackodisha</span>
            </div>
            </Card></a>



            <a href="https://jarvis.owasp.co.in/"><Card>
            <div className="box-img-container">
               <img src="./assets/logo-owsap.png" alt=""></img>
               <span className="box-content"> Register for J.A.R.V.I.S</span>
            </div>
            </Card> </a>


            <a href="https://discord.gg/nHbKFw6h"><Card>
               <div className="box-img-container">
               <img src="./assets/discord.png" alt=""></img>
               <span className="box-content"> Hackodisha Discord Server</span> </div>

            </Card></a>


            <a href="https://hackodisha.xyz/"> <Card>
            <div className="box-img-container">
               <img src="./assets/hackodisha-logo.png" alt=""></img>
               <span className="box-content"> Hackodisha website</span>
               </div>
            </Card> </a>


            <a href="https://www.instagram.com/webwiz.nitr/">  <Card>
            <div className="box-img-container">
               <img src="./assets/instagram.png" alt=""></img>
               <span className="box-content"> Instagram</span>
               </div>

            </Card> </a>


            <a href="https://in.linkedin.com/company/hack-odisha" ><Card>
            <div className="box-img-container">
               <img src="./assets/linkedin.png" alt=""></img>
               <span className="box-content">LinkedIn</span>
               </div>

            </Card></a>

            
            <a href="https://www.facebook.com/hackodisha"> <Card>
            <div className="box-img-container">
               <img src="./assets/facebook-logo.png" alt=""></img>
               <span className="box-content">Facebook</span>
            </div>
            </Card></a>


            <a href="https://twitter.com/hackodisha"><Card>
            <div className="box-img-container">
               <img src="./assets/twitter.png" alt=""></img>
               <span className="box-content">Twitter</span>
               </div>

            </Card> </a>
         </div>

      </div>
   )
}

export default SocialLinks;