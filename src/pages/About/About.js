import React from 'react'
import { motion } from 'framer-motion'
import './About.css'
import SkillBox from '../../components/SkillBox/SkillBox'
import ContactPhoto from '../../components/Photo/Photo'
import Experience from '../../components/Experience/Experience'
import Heading from '../../components/Heading/Heading'

export default function About() {
    return (
        <motion.section
            className='About'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Heading
                svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='currentColor' viewBox="0 0 512 512" xmlSpace="preserve"><path d="M505.837 180.418L279.265 76.124A55.219 55.219 0 00256 71.031a55.225 55.225 0 00-23.265 5.093L6.163 180.418C2.418 182.149 0 185.922 0 190.045s2.418 7.896 6.163 9.627l226.572 104.294A55.226 55.226 0 00256 309.067a55.242 55.242 0 0023.267-5.101l178.812-82.306v82.881c-7.096.8-12.63 6.84-12.63 14.138a14.185 14.185 0 0010.206 13.618l-12.092 79.791h55.676l-12.09-79.791a14.185 14.185 0 0010.204-13.618c0-7.298-5.534-13.338-12.63-14.138v-95.148l21.116-9.721c3.744-1.731 6.163-5.504 6.163-9.627s-2.42-7.896-6.165-9.627z" className="st0"></path><path d="M256 346.831c-11.246 0-22.143-2.391-32.386-7.104L112.793 288.71v101.638c0 22.314 67.426 50.621 143.207 50.621 75.782 0 143.209-28.308 143.209-50.621V288.71l-110.827 51.017c-10.237 4.713-21.132 7.104-32.382 7.104z" className="st0"></path></svg>}

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

                <ContactPhoto />

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
                svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='currentColor' viewBox="0 0 32 32" xmlSpace="preserve"><path d="M16.716 22.964L12.928 31l-1.964-4.598L6 27l4.014-5.784A10.927 10.927 0 0016 23c.242 0 .478-.021.716-.036zm5.313-1.774a10.938 10.938 0 01-4.143 1.637l-1.302 2.763 2.55 5.41 1.964-4.598 4.964.598-4.033-5.81zM6 12C6 6.477 10.477 2 16 2s10 4.477 10 10-4.477 10-10 10S6 17.523 6 12zm2 0a8 8 0 1016 0 8 8 0 00-16 0zm1 0c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7zm3.853-.706l1.573 1.534-.371 2.166L16 13.97l1.945 1.022-.371-2.166 1.573-1.534-2.174-.316L16 9.007l-.972 1.97-2.175.317z" className="sharpcorners_een"></path>
                </svg>}

                text='my skills'
            />

            <div className='skills'>

                <SkillBox
                    skillIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M11.622 24.74s-1.23.748.855.962c2.51.32 3.847.267 6.625-.267a10.02 10.02 0 0 0 1.763.855c-6.25 2.672-14.16-.16-9.244-1.55zm-.8-3.473s-1.336 1.015.748 1.23c2.725.267 4.862.32 8.55-.427a3.26 3.26 0 0 0 1.282.801c-7.534 2.244-15.976.214-10.58-1.603zm14.747 6.09s.908.748-1.015 1.336c-3.58 1.07-15.014 1.39-18.22 0-1.122-.48 1.015-1.175 1.7-1.282.695-.16 1.07-.16 1.07-.16-1.23-.855-8.175 1.763-3.526 2.51 12.77 2.084 23.296-.908 19.983-2.404zM12.2 17.633s-5.824 1.39-2.084 1.87c1.603.214 4.755.16 7.694-.053 2.404-.214 4.81-.64 4.81-.64s-.855.374-1.443.748c-5.93 1.55-17.312.855-14.052-.748 2.778-1.336 5.076-1.175 5.076-1.175zm10.42 5.824c5.984-3.1 3.206-6.09 1.282-5.717-.48.107-.695.214-.695.214s.16-.32.534-.427c3.794-1.336 6.786 4.007-1.23 6.09 0 0 .053-.053.107-.16zm-9.83 8.442c5.77.374 14.587-.214 14.8-2.94 0 0-.427 1.07-4.755 1.87-4.916.908-11.007.8-14.587.214 0 0 .748.64 4.542.855z" fill="#4e7896" /><path d="M18.996.001s3.313 3.366-3.152 8.442c-5.183 4.114-1.175 6.465 0 9.137-3.046-2.725-5.236-5.13-3.74-7.373C14.294 6.893 20.332 5.3 18.996.001zm-1.7 15.335c1.55 1.763-.427 3.366-.427 3.366s3.954-2.03 2.137-4.542c-1.656-2.404-2.94-3.58 4.007-7.587 0 0-10.953 2.725-5.717 8.763z" fill="#f58219" /></svg>}

                    skillName='Java'
                />

                <SkillBox
                    skillIcon={<svg width="24px" height="24px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 0h256v256H0V0z" fill="#F7DF1E" /><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" /></svg>}

                    skillName='JavaScript'
                />

                <SkillBox
                    skillIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M4.46 28.802L1.892.001h28.216l-2.57 28.797L15.982 32z" fill="#e44d26" /><path d="M25.337 26.964l2.197-24.608H16v27.197z" fill="#f16529" /><path d="M15.988 5.888H7.142l.953 10.682H16v-3.532h-4.674l-.323-3.617H16V5.888zM16 22.2l-.015.004-3.934-1.062-.25-2.817H8.253l.495 5.546 7.236 2 .016-.005z" fill="#ebebeb" /><path d="M15.988 16.57h4.35l-.4 4.58-3.94 1.063v3.675l7.242-2.007.97-10.845H16zm8.764-9.734l.084-.948h-8.85V9.42h8.532l.07-.794z" fill="#fff" /></svg>}

                    skillName='HTML'
                />

                <SkillBox
                    skillIcon={<svg width="24px" height="24px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
                        <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
                        <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white" />
                    </svg>}

                    skillName='CSS'
                />

                <SkillBox
                    skillIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid" fill="#8cc84b"><path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z" /></svg>}

                    skillName='Node.js'
                />

                <SkillBox
                    skillIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="currentColor"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" /></svg>}

                    skillName='Express'
                />

                <SkillBox
                    skillIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><g transform="matrix(.05696 0 0 .05696 .647744 2.43826)" fill="none" fillRule="evenodd"><circle r="50.167" cy="237.628" cx="269.529" fill="#00d8ff" /><g stroke="#00d8ff" strokeWidth="24"><path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z" /><path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z" /><path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z" /></g></g></svg>}

                    skillName='React'
                />

                <SkillBox
                    skillIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <defs> <linearGradient id="linearGradient-1" x1="15.791%" x2="91.009%" y1="14.737%" y2="85.228%"><stop offset="0%"></stop> <stop offset="100%" stopColor="#FFF"></stop> </linearGradient> <linearGradient id="linearGradient-2" x1="82.136%" x2="-3.113%" y1="85.237%" y2="14.79%"> <stop offset="0%"></stop><stop offset="100%" stopColor="#FFF"></stop> </linearGradient></defs><path fill="url(#linearGradient-1)" d="M127.783 190.56c56.637 77.208 112.064-21.55 111.982-80.94C239.67 39.404 168.5.16 127.737.16 62.309.159 0 54.232 0 128.216 0 210.45 71.425 256 127.737 256c-12.743-1.835-55.21-10.934-55.78-108.747-.385-66.154 21.58-92.585 55.688-80.958.764.283 37.622 14.823 37.622 62.32 0 47.296-37.484 61.944-37.484 61.944z"></path><path fill="url(#linearGradient-2)" d="M127.717 66.241c-37.424-12.899-83.269 17.946-83.269 79.726C44.448 246.844 119.201 256 128.263 256 193.691 256 256 201.926 256 127.943 256 45.709 184.575.159 128.263.159c15.597-2.16 84.065 16.88 84.065 110.458 0 61.026-51.124 94.248-84.376 80.054-.764-.283-37.623-14.823-37.623-62.32 0-47.297 37.388-62.11 37.388-62.11z"></path></svg>}

                    skillName='JSON'
                />

                <SkillBox
                    skillIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z" fill="#599636" /><path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z" fill="#6cac48" /><path d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf" /></svg>}

                    skillName='MongoDB'
                />

                <SkillBox
                    skillIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25.6 25.6"><path fill="#00678c" fillRule="evenodd" d="M23.58 19.941c-1.392-.039-2.472.104-3.377.485-.26.104-.68.104-.714.433.14.137.157.363.279.553.208.347.574.813.905 1.055l1.114.796c.68.415 1.445.658 2.107 1.073.383.242.766.554 1.149.814.195.138.313.363.557.45v-.053c-.122-.155-.157-.38-.278-.554l-.523-.501a8.216 8.216 0 00-1.81-1.747c-.558-.381-1.776-.9-2.003-1.54l-.034-.039c.382-.039.835-.173 1.201-.277.593-.155 1.132-.121 1.74-.277l.837-.242v-.155c-.314-.312-.54-.727-.87-1.02a23.202 23.202 0 00-2.874-2.13c-.54-.345-1.236-.57-1.81-.864-.21-.104-.558-.156-.68-.329-.313-.38-.487-.882-.713-1.332l-1.428-3.011c-.313-.675-.505-1.35-.888-1.972-1.793-2.942-3.743-4.724-6.738-6.472-.644-.363-1.41-.52-2.224-.71l-1.306-.07c-.28-.12-.557-.45-.801-.605C3.405 1.077.846-.272.114 1.506c-.47 1.125.697 2.232 1.093 2.803.296.398.679.848.888 1.298.117.294.156.606.279.917.278.761.54 1.61.905 2.32.195.362.4.744.644 1.072.14.194.383.277.435.588-.244.347-.26.865-.4 1.298-.627 1.956-.383 4.378.505 5.818.279.432.936 1.384 1.828 1.02.784-.311.609-1.297.835-2.163.053-.207.018-.345.122-.484v.039l.714 1.436c.54.847 1.48 1.73 2.263 2.319.418.311.749.848 1.271 1.038v-.053h-.034c-.105-.155-.262-.224-.401-.345a8.442 8.442 0 01-.905-1.039c-.731-.968-1.375-2.041-1.95-3.149-.279-.536-.523-1.124-.748-1.66-.106-.208-.106-.52-.28-.623-.26.38-.643.71-.836 1.176-.33.744-.365 1.661-.487 2.613-.07.017-.039 0-.07.039-.556-.138-.748-.71-.957-1.194-.522-1.229-.61-3.201-.157-4.62.122-.363.645-1.506.436-1.851-.106-.33-.453-.52-.645-.78a6.979 6.979 0 01-.626-1.106c-.418-.97-.627-2.042-1.08-3.011-.21-.45-.574-.917-.87-1.332-.331-.468-.696-.797-.958-1.35-.087-.194-.209-.502-.07-.71.035-.138.105-.194.244-.225.226-.194.87.052 1.097.155.644.26 1.184.502 1.723.865.244.173.506.502.82.589h.365c.557.121 1.184.039 1.705.194.923.295 1.759.727 2.508 1.194a15.383 15.383 0 015.432 5.918c.209.398.296.762.488 1.177.366.848.819 1.713 1.183 2.544.366.813.715 1.644 1.237 2.32.261.362 1.305.552 1.775.743.349.155.888.295 1.202.485.592.363 1.184.778 1.74 1.176.279.207 1.15.64 1.202.985zM5.826 4.905a2.767 2.75 0 00-.713.086v.04h.034c.14.276.383.466.557.709l.401.83.035-.038c.243-.173.366-.45.366-.865-.105-.121-.122-.242-.21-.363-.104-.173-.33-.26-.47-.398z"></path></svg>}

                    skillName='MySQL'
                />

                <SkillBox
                    skillIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><defs><linearGradient x1="262.624" y1="547.206" x2="375.377" y2="432.484" id="A" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#070135" /><stop offset="1" stopColor="#612d50" /></linearGradient></defs><g transform="matrix(.249635 0 0 .249239 -63.665715 -106.04659)"><rect width="128.016" height="128.546" ry="20.68" x="255.239" y="425.326" fill="url(#A)" /><path d="M320.213 480.665c3.27 0 5.748-.7 7.437-2.133s2.533-3.52 2.533-6.293c0-2.738-.844-4.818-2.533-6.24-1.7-1.458-4.168-2.187-7.437-2.187h-11.48v16.854h11.48m.7 34.827c4.167 0 7.293-.87 9.377-2.613 2.12-1.742 3.18-4.373 3.18-7.893 0-3.45-1.042-6.027-3.126-7.733-2.084-1.742-5.227-2.613-9.43-2.613h-12.18v20.854h12.18m19.293-28.64c4.455 1.28 7.904 3.645 10.347 7.093s3.664 7.68 3.665 12.694c0 7.68-2.623 13.405-7.868 17.174s-13.22 5.653-23.927 5.653h-34.436V449.84h31.15c11.173 0 19.257 1.67 24.25 5.013 5.03 3.342 7.545 8.694 7.545 16.054 0 3.876-.916 7.182-2.748 9.92-1.832 2.702-4.5 4.7-7.976 6.027" fill="#fff" /></g></svg>}

                    skillName='Bootstrap'
                />

                <SkillBox
                    skillIcon={<svg width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_tailwind</title><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" fill='#44a8b3' /></svg>}

                    skillName='Tailwind CSS'
                />

                <SkillBox
                    skillIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="currentColor"><path d="M3.34 15.658c.282-.232.488-.543.59-.893.206-.538-.057-1.14-.59-1.356-1.733-.878-2.852.686-3.014 1.05s-.448.942-.267 2.26.817 2.535 2.806 3.014c1.903.442 3.9.21 5.65-.66l5.88-2.452a7.21 7.21 0 0 1 1.661-.207V14.41a4.6 4.6 0 0 0-4.453-2.343c-3.176.25-4.438 1.884-5.2 2.584s-2.207 2.35-3.168 2.06-1.232-1.477-.893-1.842.606-.3.817 0c.13.242.194.513.188.787z" /><path d="M28.66 15.658c-.282-.232-.488-.543-.59-.893-.206-.538.057-1.14.59-1.356 1.733-.878 2.852.686 3.014 1.05s.448.942.267 2.26-.817 2.535-2.806 3.014c-1.903.442-3.9.21-5.65-.66l-5.88-2.452a7.21 7.21 0 0 0-1.661-.207V14.41a4.6 4.6 0 0 1 4.453-2.343c3.176.25 4.438 1.884 5.2 2.584s2.207 2.35 3.168 2.06 1.232-1.477.893-1.842-.606-.3-.817 0c-.13.242-.194.513-.188.787z" /></svg>}

                    skillName='Handlebars'
                />

                <SkillBox
                    skillIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M31.396 14.575L17.425.604a2.06 2.06 0 0 0-2.914 0l-2.9 2.9 3.68 3.68c.856-.3 1.836-.095 2.518.587a2.45 2.45 0 0 1 .581 2.533l3.547 3.547c.858-.296 1.848-.105 2.533.582a2.45 2.45 0 1 1-3.469 3.468c-.72-.72-.898-1.78-.534-2.667l-3.308-3.308v8.705a2.5 2.5 0 0 1 .65.464 2.45 2.45 0 1 1-3.468 3.468 2.45 2.45 0 0 1 0-3.468c.237-.236.5-.415.803-.535v-8.786c-.292-.12-.566-.297-.803-.535a2.45 2.45 0 0 1-.528-2.681l-3.63-3.628-9.58 9.57a2.06 2.06 0 0 0 0 2.915l13.972 13.97a2.06 2.06 0 0 0 2.914 0L31.396 17.5a2.06 2.06 0 0 0 0-2.915" fill="#f03c2e" /></svg>}

                    skillName='Git'
                />

                <SkillBox
                    skillIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 32 32"><path fill="url(#paint0_linear_87_8101)" d="M21.002 3.117c0-.88-.985-.88-1.422-.77.612-.483 1.33-.366 1.586-.219l5.913 2.9c.563.276.92.85.92 1.48v19.075c0 .639-.366 1.22-.941 1.491l-5.564 2.631c-.383.165-1.214.572-1.914 0 .875.165 1.349-.457 1.422-.879V3.116z"></path><path fill="url(#paint1_linear_87_8101)" d="M19.651 2.332c.464-.092 1.35-.05 1.35.785v6.566L3.075 23.245a.763.763 0 01-1.022-.09l-1.847-2a.772.772 0 01.045-1.092L19.58 2.348l.071-.016z"></path><path fill="url(#paint2_linear_87_8101)" d="M21.002 22.37L3.074 8.809a.763.763 0 00-1.022.091l-1.847 2A.772.772 0 00.25 11.99l19.33 17.716c.875.164 1.349-.458 1.422-.88v-6.455z"></path><defs><linearGradient id="paint0_linear_87_8101" x1="23.79" x2="23.79" y1="2" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#32B5F1"></stop><stop offset="1" stopColor="#2B9FED"></stop></linearGradient><linearGradient id="paint1_linear_87_8101" x1="21.002" x2="1.022" y1="5.534" y2="22.305" gradientUnits="userSpaceOnUse"><stop stopColor="#0F6FB3"></stop><stop offset="0.271" stopColor="#1279B7"></stop><stop offset="0.421" stopColor="#1176B5"></stop><stop offset="0.618" stopColor="#0E69AC"></stop><stop offset="0.855" stopColor="#0F70AF"></stop><stop offset="1" stopColor="#0F6DAD"></stop></linearGradient><linearGradient id="paint2_linear_87_8101" x1="1.155" x2="21.079" y1="9.984" y2="26.481" gradientUnits="userSpaceOnUse"><stop stopColor="#1791D2"></stop><stop offset="1" stopColor="#1173C5"></stop></linearGradient></defs></svg>}

                    skillName='VS Code'
                />
            </div>
        </motion.section>
    )
}
