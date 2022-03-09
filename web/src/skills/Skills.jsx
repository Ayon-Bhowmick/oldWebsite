import "./skills.css";
import { useInView } from "react-intersection-observer";

const Skills = () => {
    const [skillsTitle, setSkillsTitle] = useInView({triggerOnce: true, threshold: 0.5});

    return (
        <div className="skills">
            <div className="invisible-top-skills" />
            <div className={setSkillsTitle ? "invisible-skills": null} ref={skillsTitle}/>
            <div className={setSkillsTitle ? "head-skills" : null}>
                <h2>Skills</h2>
            </div>
            <div className="skills-container">
                <div className={setSkillsTitle ? "left-corner-skills" : null}/>
                <div className={setSkillsTitle ? "right-corner-skills" : null}/>
                <div className={setSkillsTitle ? "skills-box" : null}>
                    <div className="skills-sub-container" id="languages">
                        <h3>Languages</h3>
                        <div className="skills-list">
                            <div className="skills-list-item">
                                <img src="javascript.svg" alt="Javascript" className="skills-list-img"/>
                                <p className="skills-list-p">Javascript</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="typescript.svg" alt="TypeScript" className="skills-list-img"/>
                                <p className="skills-list-p">TypeScript</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="html.svg" alt="HTML" className="skills-list-img"/>
                                <p className="skills-list-p">HTML</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="css.svg" alt="CSS" className="skills-list-img"/>
                                <p className="skills-list-p">CSS</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="python.svg" alt="Python" className="skills-list-img"/>
                                <p className="skills-list-p">Python</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="java.svg" alt="Java" className="skills-list-img"/>
                                <p className="skills-list-p">Java</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="c.svg" alt="C" className="skills-list-img"/>
                                <p className="skills-list-p">C</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="rust.svg" alt="Rust" className="skills-list-img"/>
                                <p className="skills-list-p">Rust</p>
                            </div>
                        </div>
                    </div>
                    <div className="skills-sub-container" id="frameworks">
                        <h3>Frameworks/Libraries</h3>
                        <div className="skills-list" id="framework-list">
                            <div className="skills-list-item">
                                <img src="node.svg" alt="Node" className="skills-list-img"/>
                                <p className="skills-list-p">Node.js</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="reactjs.svg" alt="React" className="skills-list-img"/>
                                <p className="skills-list-p">React.js</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="nextjs.svg" alt="Next.js" className="skills-list-img"/>
                                <p className="skills-list-p">Next.js</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="electron.svg" alt="Electron" className="skills-list-img"/>
                                <p className="skills-list-p">Electron.js</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="tk.svg" alt="Tkinter" className="skills-list-img"/>
                                <p className="skills-list-p">Tkinter</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="expo.svg" alt="Expo" className="skills-list-img"/>
                                <p className="skills-list-p">Expo</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="mui.svg" alt="Material UI" className="skills-list-img"/>
                                <p className="skills-list-p">Material UI</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="selenium.svg" alt="Selenium" className="skills-list-img"/>
                                <p className="skills-list-p">Selenium</p>
                            </div>
                        </div>
                    </div>
                    <div className="skills-sub-container" id="tools">
                        <h3>Tools</h3>
                        <div className="skills-list" id="tools-list">
                            <div className="skills-list-item">
                                <img src="redis.svg" alt="Redis" className="skills-list-img"/>
                                <p className="skills-list-p">Redis</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="git.svg" alt="Git" className="skills-list-img"/>
                                <p className="skills-list-p">Git</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="postman.svg" alt="Postman" className="skills-list-img"/>
                                <p className="skills-list-p">Postman</p>
                            </div>
                            <div className="skills-list-item" id="vscode">
                                <img src="vscode.svg" alt="Visual Studio Code" className="skills-list-img"/>
                                <p className="skills-list-p">Visual Studio Code</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="vim.svg" alt="Vim" className="skills-list-img"/>
                                <p className="skills-list-p">Vim</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="heroku.svg" alt="Heroku" className="skills-list-img"/>
                                <p className="skills-list-p">Heroku</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="trello.svg" alt="Trello" className="skills-list-img"/>
                                <p className="skills-list-p">Trello</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="photoshop.svg" alt="Photoshop" className="skills-list-img"/>
                                <p className="skills-list-p">Photoshop</p>
                            </div>
                            <div className="skills-list-item">
                                <img src="illustrator.svg" alt="Illustrator" className="skills-list-img"/>
                                <p className="skills-list-p">Illustrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
