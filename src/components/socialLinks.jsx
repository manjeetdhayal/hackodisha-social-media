import React from 'react';

import Card from './card';

function SocialLinks() {
  return (
    <div className="social">
      <div className="social-links-container">
        <a href="https://devfolio.co/hackodisha/dashboard">
          {' '}
          <Card>
            <div className="box-img-container">
              <img
                className="box-img-apply-with-devfolio"
                src={require('./assets/devfolio.png').default}
                alt="Hackodisha Devfolio Registeration"
              ></img>
              <span className="box-content">Hackodisha Registration</span>
            </div>
          </Card>
        </a>

        <a href="https://jarvis.owasp.co.in/">
          <Card>
            <div className="box-img-container">
              <img
                className="box-img-jarvis"
                src={require('./assets/logo-owasp.png').default}
                alt="Hackodisha JARVIS Registeration"
              ></img>
              <span className="box-content"> Register for J.A.R.V.I.S</span>
            </div>
          </Card>{' '}
        </a>

        <a href="https://discord.gg/nHbKFw6h">
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/discord.png').default}
                alt="Hackodisha Discord"
              ></img>
              <span className="box-content"> Hackodisha Discord</span>{' '}
            </div>
          </Card>
        </a>

        <a href="https://hackodisha.xyz/">
          {' '}
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/hackodisha-logo.png').default}
                alt="Hackodisha Website"
              ></img>
              <span className="box-content"> Hackodisha website</span>
            </div>
          </Card>{' '}
        </a>

        <a href="https://www.instagram.com/webwiz.nitr/">
          {' '}
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/instagram.png').default}
                alt="Hackodisha Webwiz Instagram"
              ></img>
              <span className="box-content"> Instagram</span>
            </div>
          </Card>{' '}
        </a>

        <a href="https://in.linkedin.com/company/hack-odisha">
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/linkedin.png').default}
                alt="Hackodisha Linkedin"
              ></img>
              <span className="box-content">LinkedIn</span>
            </div>
          </Card>
        </a>

        <a href="https://www.facebook.com/hackodisha">
          {' '}
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/facebook-logo.png').default}
                alt="Hackodisha Facebook"
              ></img>
              <span className="box-content">Facebook</span>
            </div>
          </Card>
        </a>

        <a href="https://twitter.com/hackodisha">
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/twitter.png').default}
                alt="Hackodisha Twitter"
              ></img>
              <span className="box-content">Twitter</span>
            </div>
          </Card>{' '}
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
