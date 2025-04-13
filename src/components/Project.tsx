import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/Brain Quiz App.jpg';
import mock03 from '../assets/images/Rock Paper Scissoor.jpg';
import mock04 from '../assets/images/Hotel.png';
import mock05 from '../assets/images/facebook.jpg';
import mock06 from '../assets/images/Bit Machine.jpg';
import mock07 from '../assets/images/Christmas-Tree.jpg';
import mock08 from '../assets/images/Cloth Store.jpg';
import mock09 from '../assets/images/Shaly-Clothing.png';
import mock10 from '../assets/images/Travel App.png';
import '../assets/styles/Project.scss';
import { Chip } from "@mui/material";

const labelsFirst = [
    " Android Kotlin "
];

const labelsSecond = [
    " React ",
    " TypeScript ",
];

const labelsThird = [
    " React ",
    "JavaScript"
];

const labelsFourth = [
    "HTML",
    "CSS"
];

const labelsFifth = [
    "Python"
];

const labelsSeventh = [
    "Java"
];

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/nethmith/travel_app" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/nethmith/travel_app" target="_blank" rel="noreferrer"><h2>Travel App</h2></a>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <p>This Travel App is a mobile application developed using Android Studio and Kotlin as part of a Mobile Application Development. The project showcases fundamental Android development skills, focusing on creating a user-friendly interface and implementing core functionalities typical of travel applications.​</p>
                </div>

                <div className="project">
                    <a href="https://github.com/nethmith/Shaly-Clothing" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/nethmith/Shaly-Clothing" target="_blank" rel="noreferrer"><h2>Shaly-Clothing – Modern Fashion E-Commerce Platform</h2></a>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <p>Shaly-Clothing is a modern fashion e-commerce platform designed to provide users with a seamless online shopping experience. Developed using contemporary web technologies, the application features a user-friendly interface that showcases a diverse range of clothing items. </p>
                </div>

                <div className="project">
                    <a href="https://github.com/nethmith/ClothStore" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/nethmith/ClothStore" target="_blank" rel="noreferrer"><h2>Clothing Store</h2></a>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <p>The ClothStore project is a full-stack web application designed to provide a seamless online shopping experience for clothing enthusiasts. Developed with a modern tech stack, the application features a responsive and intuitive user interface that allows customers to browse a diverse range of clothing items, add them to their cart, and proceed to checkout with ease. The backend is structured to handle product management, user authentication, and order processing efficiently. </p>
                </div>

                <div className="project">
                    <a href="https://github.com/nethmith/Christmas-Tree" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/nethmith/Christmas-Tree" target="_blank" rel="noreferrer"><h2>Christmas-Tree</h2></a>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <p>This is a fun and festive SVG animation featuring a beautifully animated Christmas tree with sparkling effects. Perfect for spreading holiday cheer!</p>
                </div>

                <div className="project">
                    <a href="https://github.com/nethmith/bitMachine" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/nethmith/bitMachine" target="_blank" rel="noreferrer"><h2>Slot Machine Game</h2></a>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFifth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <p>A simple Python-based slot machine game where you can deposit money, place bets, and spin to win big! </p>
                </div>

                <div className="project">
                    <a href="https://github.com/nethmith/Facebook-Clone" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/nethmith/Facebook-Clone" target="_blank" rel="noreferrer"><h2>Facebook Clone</h2></a>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <p>Welcome to the Facebook Clone built with React! This project aims to replicate the core features and design of Facebook, giving you a hands-on experience in building complex web applications using modern frontend technologies.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/nethmith/JavaProject01" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/nethmith/JavaProject01" target="_blank" rel="noreferrer"><h2>Room Management</h2></a>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSeventh.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <p>Room Management application designed to demonstrate key programming concepts, clean code practices, and object-oriented principles. This project showcases my journey in Java development and serves as a platform to explore problem-solving techniques, UI design, and software development patterns in action.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/nethmith/Rock-Paper-Scissors" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/nethmith/Rock-Paper-Scissors" target="_blank" rel="noreferrer"><h2>Rock Paper Scissors Game</h2></a>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <p>A sleek, responsive Rock Paper Scissors game implemented with HTML, CSS, and JavaScript. This project showcases front-end web development skills with a focus on creating an engaging user interface and interactive gameplay.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/nethmith/BrainBurst-Quiz-App" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/nethmith/BrainBurst-Quiz-App" target="_blank" rel="noreferrer"><h2>BrainBurst-Quiz-App</h2></a>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <p>Unleash your inner genius with BrainBurst: Where every question is a paint, every question is a power, and knowledge is your superpower! </p>
                </div>

            </div>
        </div>
    );
}

export default Project;