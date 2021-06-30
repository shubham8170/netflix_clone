import React from 'react'
import './About.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

function About() {
    return (
        <div className="footer">
            <div className="media_logo">
                <div className="all_logo">
                <FacebookIcon/>
                </div>
                <div className="all_logo">
                    <TwitterIcon/>
                </div>
                <div className="all_logo">
                    <InstagramIcon/>
                </div>
                <div className="all_logo">
                    <YouTubeIcon/>
                </div>
            </div>

            <div className="all_footer_info">
            <div className="footer_info">
                <p>Audio & Subtitles</p>
                <p>Press</p>
                <p>Privacy</p>
                <p>Contact us</p>
            </div>

            <div className="footer_info">
                <p>Description audio</p>
                <p>Relationship with investor</p>
                <p>Legal Notice</p>
            </div>

            <div className="footer_info">
                <p>Help center</p>
                <p>Carrers</p>
                <p>Cookies preferences</p>
            </div>

            <div className="footer_info">
                <p>Gift Cards</p>
                <p>Terms of use</p>
                <p>Corporate information</p>
            </div>

            </div>

            
                <button  className="footer_button">Service Code</button>

                <p style={{color:"white" ,fontSize:"80%"}}>1997-2021 netflix clone @Inc</p>
          


            
            
        </div>
    )
}

export default About;
