import React from 'react'
import { motion } from 'framer-motion'
import './About.css'
import SkillBox from '../../components/SkillBox/SkillBox'
import Photo from '../../components/Photo/Photo'
import Experience from '../../components/Experience/Experience'
import Heading from '../../components/Heading/Heading'
import JavaIcon from '../../icons/JavaIcon'
import JavaScriptIcon from '../../icons/JavaScriptIcon'
import HTMLIcon from '../../icons/HTMLIcon'
import CSSIcon from '../../icons/CSSIcon'
import NodejsIcon from '../../icons/NodejsIcon'
import ExpressIcon from '../../icons/ExpressIcon'
import ReactIcon from '../../icons/ReactIcon'
import JSONIcon from '../../icons/JSONIcon'
import MongoDBIcon from '../../icons/MongoDBIcon'
import MySQLIcon from '../../icons/MySQLIcon'
import BootstrapIcon from '../../icons/BootstrapIcon'
import TailwindIcon from '../../icons/TailwindIcon'
import HandlebarsIcon from '../../icons/HandlebarsIcon'
import GitIcon from '../../icons/GitIcon'
import VSCodeIcon from '../../icons/VSCodeIcon'
import HatIcon from '../../icons/HatIcon'
import BadgeIcon from '../../icons/BadgeIcon'

export default function About() {
    return (
        <motion.section
            className='About'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Heading
                svg={<HatIcon />}
                text='about me'
            />

            <div className="about-head">
                <div className="left-part">
                    <Experience
                        expName='Back-End Developer'
                        expBody='Full-Stack Develoepr with 2 years of experience in both front-end and back-end developement in MERN stack'
                    />
                    <Experience
                        expName='Software Developer'
                        expBody='Experienced in Java (collections, AWT, JDBC). With Java, I have honed my object-oriented programming skills and developed scalable applications'
                    />
                </div>

                <Photo />

                <div className="right-part">
                    <Experience
                        expName='Front-End Developer'
                        expBody='I am well-versed in front-end development using React, CSS, Bootstrap and Tailwind CSS'
                    />
                    <Experience
                        expName='Problem Solving'
                        expBody='Throughout my academic journey and personal projects, I have developed strong problem-solving and analytical skills. I am adept at translating complex requirements into practical solutions'
                    />
                </div>
            </div>

            <Heading
                svg={<BadgeIcon />}
                text='my skills'
            />

            <div className='skills'>

                <SkillBox
                    skillIcon={<JavaIcon />}
                    skillName='Java'
                />

                <SkillBox
                    skillIcon={<JavaScriptIcon />}
                    skillName='JavaScript'
                />

                <SkillBox
                    skillIcon={<HTMLIcon />}
                    skillName='HTML'
                />

                <SkillBox
                    skillIcon={<CSSIcon />}
                    skillName='CSS'
                />

                <SkillBox
                    skillIcon={<NodejsIcon />}
                    skillName='Node.js'
                />

                <SkillBox
                    skillIcon={<ExpressIcon />}
                    skillName='Express'
                />

                <SkillBox
                    skillIcon={<ReactIcon />}
                    skillName='React'
                />

                <SkillBox
                    skillIcon={<JSONIcon />}
                    skillName='JSON'
                />

                <SkillBox
                    skillIcon={<MongoDBIcon />}
                    skillName='MongoDB'
                />

                <SkillBox
                    skillIcon={<MySQLIcon />}
                    skillName='MySQL'
                />

                <SkillBox
                    skillIcon={<BootstrapIcon />}
                    skillName='Bootstrap'
                />

                <SkillBox
                    skillIcon={<TailwindIcon />}
                    skillName='Tailwind CSS'
                />

                <SkillBox
                    skillIcon={<HandlebarsIcon />}
                    skillName='Handlebars'
                />

                <SkillBox
                    skillIcon={<GitIcon />}
                    skillName='Git'
                />

                <SkillBox
                    skillIcon={<VSCodeIcon />}
                    skillName='VS Code'
                />
            </div>
        </motion.section>
    )
}
