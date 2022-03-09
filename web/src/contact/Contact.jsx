import { useInView } from "react-intersection-observer"
import "./contact.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Contact = () => {
    const [contactTitle, setContactTitle] = useInView({triggerOnce: true, threshold: 0.5});

    return (
        <div className="contact">
            <div className="invisible-top-contact"/>
            <div className={setContactTitle ? "invisible-contact": null} ref={contactTitle}/>
            <div className={setContactTitle ? "head-contact" : null}>
                <h2>Contact</h2>
            </div>
            {/* <div className="contact-content">
                <div className="linkedin">
                    <LinkedInIcon />
                    <p>LinkedIn</p>
                </div>
                <div className="github" href="">
                    <GitHubIcon />
                    <p>GitHub</p>
                </div>
                <div className="devpost">
                    <img src="devpost.svg" alt="devPost"/>
                    <p>DevPost</p>
                </div>
                <div className="email">
                    <EmailRoundedIcon />
                    <p>Email</p>
                </div>
            </div> */}
        </div>
    );
}

export default Contact;
