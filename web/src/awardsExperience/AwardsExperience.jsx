import { useInView } from "react-intersection-observer"
import "./awardsExperience.css";

const AwardsExperience = () => {
    const [awardsTitle, setAwardsTitle] = useInView({triggerOnce: true, threshold: 0.5});

    return (
        <div className="awardsExperience">
            <div className="invisible-top-awards"/>
            <div className={setAwardsTitle ? "invisible-awards": null} ref={awardsTitle}/>
            <div className={setAwardsTitle ? "head-awards" : null}>
                <h2>Awards/Experience</h2>
            </div>
            <div className="awards-container" id="top_award">
                <div className="awards-content">
                    <h2>HackHolyoke Hackathon Best Sustainability Hack</h2>
                    <p className="sub">
                        October 2021
                    </p>
                    <p className="award-body">
                        I won the HackHolyoke Best Sustainability Hack. I made a web app that tracks the expiration dates of your perishables and reminds you when they are going to go bad. This was done to help prevent food waste. This app was made using React and Material UI.
                    </p>
                </div>
            </div>
            <div className="awards-container">
                <div className="awards-content">
                    <h2>Heptology Laboratory Intern</h2>
                    <p className="sub">
                        June 2020 - August 2020
                    </p>
                    <p className="award-body">
                        I conducted experimentation on the connection between Hyaluronan production and the development of liver fibrosis. I also worked with a team to develop a presentation to display the findings.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AwardsExperience;
