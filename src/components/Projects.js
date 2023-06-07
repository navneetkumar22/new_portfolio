import React, { useState } from 'react';
import "../styles/Projects.css";
import { fullStack, htmlCss, tailwind, reactJS, vanillaJS, funWithDom } from '../projectList';
import Card from './Card';

const Projects = () => {

    const [projects, setProjects] = useState(fullStack);
    const [selectedLink, setSelectedLink] = useState('Full Stack')

    const getProjects = (e) => {
        setSelectedLink(e.target.innerHTML);

        switch (e.target.innerHTML) {
            case 'Full Stack': setProjects(fullStack);
                break;
            case 'HTML CSS': setProjects(htmlCss);
                break;
            case 'Tailwind CSS': setProjects(tailwind);
                break;
            case 'React JS': setProjects(reactJS);
                break;
            case 'Vanilla JS': setProjects(vanillaJS);
                break;
            case 'Fun with DOM': setProjects(funWithDom);
                break;

            default:
                break;
        }
    }


    return (
        <section className='projects' id='projects'>
            <h1>My <span className='text-span'>Projects</span></h1>

            <div className='category'>
                <ul>
                    <li onClick={getProjects} className={selectedLink === 'Full Stack' ? 'selected' : ''}>Full Stack</li>
                    <li onClick={getProjects} className={selectedLink === 'React JS' ? 'selected' : ''}>React JS</li>
                    <li onClick={getProjects} className={selectedLink === 'Vanilla JS' ? 'selected' : ''}>Vanilla JS</li>
                    <li onClick={getProjects} className={selectedLink === 'HTML CSS' ? 'selected' : ''}>HTML CSS</li>
                    <li onClick={getProjects} className={selectedLink === 'Tailwind CSS' ? 'selected' : ''}>Tailwind CSS</li>
                    <li onClick={getProjects} className={selectedLink === 'Fun with DOM' ? 'selected' : ''}>Fun with DOM</li>
                </ul>
            </div>

            <div className='projects-container'>
                {projects.map((project) => (
                    <Card data={project} key={project.id} />
                ))}
            </div>
        </section >
    )
}

export default Projects;