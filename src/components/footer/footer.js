import React from 'react';
import './footer.css';
import Twitter from '../../twitter.jpg';
import Facebook from '../../face.jpg';
// import Instagram from '../../insta.jpg';
import Linkedn from '../../linked.jpg';
import Mail from '../../mailer.jpg';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>
                <div>
                    <div id = 'p-holder'>
                        <p id = 'need'>
                            You need me to help out with a project?
                        </p>
                        <div id = 'hr'></div>
                        <p id = 'hit'>
                            Connect with me via
                        </p>
                    </div>

                    <div>
                        <a href = 'https://twitter.com/The_Tunde_'>
                            <img src = { Twitter } alt = 'Twitter Logo' />
                        </a>
                        {/* <a href = '#'>
                            <img src = { Instagram } alt = 'Instagram Logo' />
                        </a> */}
                        <a href = 'tolayiwola19@yahoo.com'>
                            <img src = { Mail } alt = 'Mail Logo' />
                        </a>
                        <a href = 'https://web.facebook.com/olayiwolatunexsamuel/'>
                            <img src = { Facebook } alt = 'Facebook Logo' />
                        </a>
                        <a href = 'https://www.linkedin.com/in/olayiwola-samuel-tunde-41281415b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bjr0xS1tATzuFUeHt9YO0bA%3D%3D'>
                            <img src = { Linkedn  } alt = 'Linkedn Logo' />
                        </a>
                        
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;
