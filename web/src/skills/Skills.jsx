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
            
        </div>
    );
}

export default Skills;