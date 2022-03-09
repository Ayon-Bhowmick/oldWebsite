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
                            <img src="github.svg" alt="github" />
                        </Button>
                        <Button href="https://devpost.com/software/susfoods-for-a-sustainable-future" target="_blank" sx={{color:"#945197"}}>
                            <img src="devpost.svg" alt="devPost"/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="projects-container">
                <img src="BirthdayList.png" alt="BirthdayList" id="birthday_img" />
                <div className={"project-description"} id="birthday">
                    <h3>Birthday List</h3>
                    <p>
                        This web app stores and displays people's birthdays which you can enter. I made this project in order to teach my self how to use the Redis database.
                    </p>
                    <p>
                        Made with:
                    </p>
                    <div className="made-with-list">
                        <h5>JavaScript</h5>
                        <h5>Next.js</h5>
                        <h5>Node.js</h5>
                        <h5>Redis</h5>
                        <h5>Material UI</h5>
                    </div>
                    <div className="project-links" id="birthday-link">
                        <Button href="https://github.com/Ayon-Bhowmick/Birthday_List" target="_blank" sx={{color:"#945197"}}>
                            <img src="github.svg" alt="github" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="projects-container">
                <img src="VioletLight.jpg" alt="VioletLight" />
                <div className={"project-description"} id="violetLight">
                    <h3>Violet Light</h3>
                    <p>
                        Violet Light is a phone app which allows you make a group of friends which allows you to see each other's distance and battery level. This is for when a group of friends wants to check in on each other at a party in order to stay safe. This project was made for the HackViolet 2021.
                    </p>
                    <p>
                        Made with:
                    </p>
                    <div className="made-with-list">
                        <h5>JavaScript</h5>
                        <h5>React Native</h5>
                        <h5>Expo</h5>
                        <h5>Redis</h5>
                        <h5>Next.js</h5>
                    </div>
                    <div className="project-links" id="violetLight-link">
                        <Button href="https://github.com/Ayon-Bhowmick/HackViolet" target="_blank" sx={{color:"#945197"}}>
                            <img src="github.svg" alt="github" />
                        </Button>
                        <Button href="https://devpost.com/software/violetlight" target="_blank" sx={{color:"#945197"}}>
                            <img src="devpost.svg" alt="devPost"/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
