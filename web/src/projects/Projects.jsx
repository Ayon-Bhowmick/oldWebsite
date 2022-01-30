import "./projects.css";
import { useInView } from "react-intersection-observer"
import Button from '@mui/material/Button';

const Projects = () => {
    const [projTitle, setProjTitle] = useInView({triggerOnce: true, threshold: 0.5});

    return (
        <div className="projects">
            <div className="invisible-top-projects"/>
            <div className={setProjTitle ? "invisible-projects": null} ref={projTitle}/>
            <div className={setProjTitle ? "head-projects" : null}>
                <h2>Projects</h2>
            </div>
            <div className="projects-container">
                <div className="invisible-left-projects"/>
                <img src="SusLogo.png" alt="SusLogo" />
                <div className={setProjTitle ? "project-description animate" : "project-description"}>
                    <h3>Sus Foods</h3>
                    <p>
                        Sus Foods is a web app that combats the problem of food waste. It does this by tracking the expiration dates of your perishables and reminds you when they are going to go bad. This project was made for the HackHolyoke 2021 hackathon and won.
                    </p>
                    <p>
                        Made with:
                    </p>
                    <div className="made-with-list">
                        <h5>JavaScript</h5>
                        <h5>React.js</h5>
                        <h5>Node.js</h5>
                        <h5>Material UI</h5>
                        <h5>CSS</h5>
                    </div>
                    <div className="project-links">
                        <Button href="https://github.com/Ayon-Bhowmick/HackHolyoke" target="_blank" sx={{color:"#945197"}}>
                            <img src="github.svg" alt="Github"/>
                        </Button>
                        <Button href="https://devpost.com/software/susfoods-for-a-sustainable-future" target="_blank" sx={{color:"#945197"}}>
                            <img src="devpost.svg" alt="devPost"/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;