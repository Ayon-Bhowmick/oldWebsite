import { useInView } from "react-intersection-observer"
import "./contact.css";

const Contact = () => {
    const [contactTitle, setContactTitle] = useInView({triggerOnce: true, threshold: 0.5});

    return (
        <div className="contact">
            <div className="invisible-top-contact"/>
            <div className={setContactTitle ? "invisible-contact": null} ref={contactTitle}/>
            <div className={setContactTitle ? "head-contact" : null}>
                <h2>Contact</h2>
            </div>
            <div className="contact-content">
                <div className="contact_link">
                    <img src="email.svg" alt="email"/>
                    <p>Email</p>
                    <a className="actual-link" href="mailto:ayonbhowmick2002@gmail.com" target="_blank" id="email_link">
                        <span/>
                    </a>
                </div>
                <div className="contact_link">
                    <img src="linkedin.png" alt="linkedin" id="linkedin"/>
                    <p>LinkedIn</p>
                    <a className="actual-link" href="https://www.linkedin.com/in/ayon-bhowmick-40685a226/" target="_blank" id="linkedin_link">
                        <span/>
                    </a>
                </div>
                <div className="contact_link">
                    <img src="github.svg" alt="github"/>
                    <p>GitHub</p>
                    <a className="actual-link" href="https://github.com/Ayon-Bhowmick" target="_blank" id="github_link">
                        <span/>
                    </a>
                </div>
                <div className="contact_link">
                    <img src="devpost.svg" alt="devPost"/>
                    <p>DevPost</p>
                    <a className="actual-link" href="https://devpost.com/ayonbolt" target="_blank" id="devpost_link">
                        <span/>
                    </a>
                </div>
            </div>
            <a id="website-link" href="https://github.com/Ayon-Bhowmick/Ayon-Bhowmick.github.io/tree/main/web" target="_blank">Link to Github of website</a>
        </div>
    );
}

export default Contact;
