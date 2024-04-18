import React, { Fragment, useEffect, useState } from 'react';
import { userActions } from "../../Actions";
import { connect } from 'react-redux';
import Blank from '../../Images/blank_image.PNG'; 
import ProfilePicture from '../../Images/ProfilePicture.PNG'; 

const Account = ({ }) => {
    return (
        <Fragment>
            <div className='main-container Account'>

                <div className='container'>
                    <div className='bio'>
                        <h1>About</h1>

                        <div className='row'>
                            <h3>Biography</h3>

                            <div className='col-lg-6'>

                                <p>
                                    Brendon Whitford was born in Riverside, California and grew up in Idaho Falls, Idaho. He was heavily involved with his high school's theater and orchestra programs. After graduating from high school, he worked as a carpenter.
                                </p>
                                <p>
                                    At Boise State University, Brendon studied in the Games Interactive Media Mobile (GIMM) program and took was passionate in learning more about UX Design and Japanese culture and language.
                                </p>
                                <p>
                                    Along with his studies, Brendon kept busy with extracurricular activities. He was the president of two clubs, was a student senator, participated in a collaborative study group with foreign universities, volunteered in Boise State’s eSports program, and worked on team game projects outside of the classroom.
                                </p>
                                <p>
                                    He also worked several part-time jobs, often concurrently, to gain as much experience in different fields as he could. During his undergraduate career, Brendon worked as a Parking Attendant Lead, Custodian, Market and Design Intern, IT Project Coordinator, PA on commercial shoots, and more. He is most proud of his roles as a UX/UI Designer for GIMM Works and Research Assistant for a professor in the GIMM Program.
                                </p>
                                <p>
                                    Brendon now has a Bachelor of Science degree in GIMM, a minor in Japanese Studies, and a certificate in UX Design. He has developed a deep passion for UX Design and hopes to create products that are user friendly and accessible for as many people as possible.
                                </p>
                            </div>
                            <div className='col-lg-6 image'>
                                <img src={ProfilePicture} alt="Placeholder Image" />
                            </div>
                        </div>
                    </div>
                    <div className='skills'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h3>Skills</h3>
                                <ul>
                                    <li>UX/UI Design</li>
                                    <li>UX Research</li>
                                    <li>Figma</li>
                                    <li>Product Design</li>
                                    <li>Team Management</li>
                                    <li>Unity VR Development</li>
                                    <li>Unity 3D Development</li>
                                    <li>Web Development</li>
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <h3>Interests</h3>
                                <ul>
                                    <li>Design (of all kinds)</li>
                                    <li>Video Games</li>
                                    <li>Dungeons and Dragons</li>
                                    <li>Tournament Organization</li>
                                    <li>Retro Game Collecting</li>
                                    <li>Japanese Language and Culture</li>
                                    <li>Board Games</li>
                                    <li>Traveling</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='kudos'>
                        <h3>Kudos</h3>

                        <p>
                            Most projects are highly collaborative endeavors and there are almost no projects that I have worked on alone. In no particular order, these are some of the people that I have been lucky enough to work alongside that have contributed to designs, development, art assets, or feedback. 
                        </p>
                        <div className='kudos-people'>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/alexanderspoon/">Alexander Spoon</a></span>
                            <span className='role'> (Full Stack Web Developer). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/brandonbenoit/">Brandon Benoit</a></span>
                            <span className='role'> (Project Manager). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/sydneyareinert/">Sydney Reinert</a></span>
                            <span className='role'> (3D Artist). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/brady-l-williamson/">Brady Williamson</a></span>
                            <span className='role'> (VFX Artist). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/sarina-lloyd-3a8a68198/">Sarina Lloyd</a></span>
                            <span className='role'> (3D Artist). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/zekewandeler/">Zeke Wandeler</a></span>
                            <span className='role'> (UX/UI Designer). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/heavenleerust/">Heaven Rust</a></span>
                            <span className='role'> (Narrative Designer). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/ryna-hall-96312720b/">Ryna Hall</a></span>
                            <span className='role'> (Software Developer). </span>
                        </div>
                    </div>


                </div>

            </div>
        </Fragment>
    )
};

function mapState(state) {
    const { session } = state;
    return { session };
}

const actionCreators = {
};

const connection = connect(mapState, actionCreators)(Account);
export { connection as Account };