import React, { Fragment, useEffect, useState, useRef } from 'react';
import { userActions } from "../../Actions";
import { connect } from 'react-redux';
import Blank from '../../Images/blank_image.PNG'; 
import StickyBox from "react-sticky-box";
import Modal from 'react-bootstrap/Modal';
import { HashLink } from 'react-router-hash-link';

const Projects = ({}) => {
                {/* <span class="hyperlink" data-info='
                <div>
                    <img src="${Blank}" alt="Placeholder Image" />
                    <p class="example-modal-css">Sample</p>
                </div>
                '>features list</span> */}
    const displayInfo = [
        {
            title: "<h2 id='FATE'>FATE</h2>",
            tags: ["Product Management", "UX/UI Design", "Figma", "Client Relations", "React"],
            description: `
            <p >
                STILL IN DEVELOPMENT
                FATE, or the Framework for Assessing Teaching Effectiveness, is a portfolio review system for college professors aimed at improving the current way that professors are evaluated. The web tool for creating and assessing portfolios is being developed by GIMM Works
                <div>
                I am acting as product manager and primary designer for this project. In addition, I am assisting in the development of the React web application.
                </div>
            </p>
            `,
            image: Blank,
            underline: false,
            nextTitle: "",
        },
        {
            title: "<h2 id='Beam Tours'>Beam Tours</h2>",
            tags: ["UX/UI Design", "Figma", "Product Design", "Client Relations", "Adobe Illustrator"],
            description: `
            <p>
            Beam Tours is a multi-purpose student life mobile app for Android and Apple devices. It is published and developed by GIMM Works under Boise State University.
            <div>
            Beam Tours is an application that has been in development since 2016 under the original name of Bronco Beam with the basic functionality of notifying students of extra food from events around campus to cut down on food insecurity and waste within the student population. Over time it has been re-branded and developed new features.
            </div>

            <div>
            My contribution to the application was re-designing the UI and user flow during a re-factor of the application that added new functionality for campus-guided and unguided tours. We also expanded the features to be accessible to more universities than only Boise State at the direction of our clients, GEAR UP.
            </div>

            <div>
            I began by reviewing the current state of the application and similar touring applications. During this process, I took notes on areas for improvement and inspiration from features in other apps. I also guided our development team during an ideation session where we discussed features we wanted to implement and improve the general user experience. After this, I got to work on wireframing the re-design of both the application and the website admin portal used to create tours that would then be accessible on the app.
            </div>

            <div>
            My wireframing process started with whiteboarding to further define user actions, a simple user flow of required pages, and approximate placements and organization of elements on the pages. After receiving stakeholder feedback and making adjustments, I moved on to a low-fidelity Figma prototype of the Admin web portal and mobile app. When I started the design phase in Figma, we used the Material 3 Design System, which I used as guidance for UI as we continued the design process. Once again, I received feedback from stakeholders on the low-fidelity Figma prototype and adjusted the design. I then moved to the final stage of a complete high-fidelity Figma prototype and finished the Interaction Design. It received final approval from stakeholders and was passed off to the programming team. As they developed the web portal and app, I helped guide them through any questions they had about the design.
            </div>
            </p>
            `,
            image: Blank,
            underline: false,
            nextTitle: "",
        },
        {
            title: "<h2 id='Freeman Tour'>Freeman Tour</h2>",
            tags: ["UX/UI Design", "Figma", "Product Design", "Client Relations"],
            description: `
            <p>
            Freeman Tour is an AR-focused mobile app created for the use of Freeman during their annual company conference. It is an app aimed to guide users through landmarks across Boise, entertaining and educating them about the city’s history. It is published and developed by GIMM Works under Boise State University. As of 2023, Freeman has donated the app and the content within it to the City of Boise, which contracted GIMM Works to create a new application that expands Freeman Tour to include more locations and educational material for city residents.
            <div>
            In mid-2023, the Freeman company contacted GIMM Works. They asked us to create an app to engage and educate conference attendees about the city's history using Augmented Reality. They also provided examples of similar apps that we could use as inspiration. My contribution to the project was doing initial research on the examples we were sent and then ideating ideas for our app. Once I completed researching and conceptualizing, I gained approval within our team. My proposed concept was to create an app where users could visit several landmarks around the city’s downtown, and using their phone cameras, they could scan the environment in AR. Once scanned, a “portal” to the past would open, and users could do activities where they would interact with characters of early residents of the city’s past and play educational minigames in AR. We then presented it to our client and received approval from them as well.
            </div>
            <div>
            At that point, my work switched to designing specific activities with other team members. Our work on that front required a lot of collaboration to design fun game mechanics. We also did further research by reaching out to partners around the city to create activities and characters that were as historically accurate as we could make. In between, I also designed the UI and an example game loop in Figma and then passed it to our Unity developers and artists. During the final stages of the project, I also contributed to texturing 3D models.
            </div>
            <div>
            Once we had completed the project, Freeman invited our team to participate in their company conference and present the app. After our presentation, we did a walkthrough of the experience with attendees and received positive feedback.
            </div>
            </p>
            `,
            image: Blank,
            underline: false,
            nextTitle: "",
        },
        {
            title: "<h2 id='A Mind For All Seasons'>A Mind For All Seasons</h2>",
            tags: ["UX/UI Design", "Figma", "Product Design", "Client Relations"],
            description: `
            <p>
            A Mind For All Seasons is a Boise-located health clinic specializing in brain health and improving memory and cognition. They partnered with Boise State University College of Innovation and Design to act as clients in a UX class to make designs more accessible and intuitive.
            <div>
            In the class, we adopted the 5-Day Design Sprint, and across a seven-week class, we went through each stage of the sprint to create a few features that would improve the website and make it more accessible for student-athletes. Throughout the process as a class, we gave feedback to each other on our work and voted on things we liked the most that we used as guidance as we continued the design process. 
            </div>
            <div>
            “Monday,” we spent some time learning about our target demographic of student-athletes, some of the issues they face, how our client’s product could benefit them, and potential barriers that would prevent them from accessing our client’s product. We then drafted How Might We questions that addressed problems. Then, using these questions to create an end goal, we mapped potential areas to implement solutions based on our How Might We questions and end goal. On “Tuesday,” we researched similar products that had solutions that might address our HMW questions and made quick sketches of solutions for our product with that inspiration. Then “Wednesday,” as a class, we picked the solutions we liked the most and began to design them further in more detail. “Thursday,” we created detailed prototypes based on what we had decided on “Wednesday.” Finally, “Friday” we tested our prototypes and got feedback from stakeholders and other designers on specific parts of the prototype that we asked them to review. Once we received feedback, we made final adjustments and presented our prototype, design decisions, and reasoning to the class and our client.
            </div>
            </p>
            `,
            image: Blank,
            underline: true,
            nextTitle: "XR Development",
        },
        {
            title: "<h2 id='MNDR Virtual Album'>MNDR Virtual Album</h2>",
            tags: ["Project Management", "Team Management", "Client Relations", "Trello", "VR Development", "Unity"],
            description: `
            <p>
            STILL IN DEVELOPMENT 
            MNDR Virtual Album is a VR experience created by the GIMM Program for the musical artist MNDR as part of the senior capstone class. As part of the senior capstone class, we participate in client projects. This project has been in development for three years and has been through a few different iterations throughout its development. As part of the 23-24 school year, I was the co-team lead and project manager for a 20-person team and primarily responsible for the programming and UX teams. In addition as part of my role as a team lead, I was responsible for optimizing the product for the Quest 2 and ensured QA within Unity.
            <div>
            We started this project in October 2023 and were given access to the previous team's GitHub repository, Google Drive files, and Unity Project. I and the other team lead, Sydney, reviewed the previous team's files and information and assigned important areas to the rest of the team to review and take notes on any potential issues or opportunities for improvement. We were also able to meet with our client to receive context from her on the project her goals for the end of the school year and where she would like the project to be by the end of the spring semester. Her goal was for the project to be in a playable state that she could load onto Quest headsets and bring to music festivals. She wanted there to be at least 3 different scenes. 1st, a Hub World, where players could navigate to navigate to different locations and activities. 2nd, a nature-themed scene that takes place within the larger environment of her brain. 3rd, a club-themed scene that also takes place within the larger environment of her brain. Each scene would have one primary activity while giving space for a future team to build the spaces out even further. After we had been given that context and had finished reviewing the previous version of the product we found all of the aspects of the project that we would be able to refactor and adjust to meet our new goals.
            </div>
            <div>
            Once we finished reviewing and familiarizing ourselves with the project we started by having a few of our artists draw concept art for the different scenes in the environment, while the other artists re-textured and retopologized previous models. During this time the programming team worked on updating the project to Unity 2022, addressing known bugs, and documenting code. The UX team took notes on current areas of friction that existed in the project.
            </div>
            <div>
            The entire team met weekly for team-wide stand-ups to keep everyone on track and up to date with the current status of the project, then we would split into smaller groups where we could address progress from the past week and any current barriers.
            </div
            <div>
            Once we had concept art of our environments we presented them to our client. She picked the ones that she liked the most and we began the design and development process for those environments. We selected a few artists to greybox the environments in Unity. I began putting together a list of all interactions that we would have in our environments and assigned tasks for our programming team to create while the rest of the art team began creating assets based on the asset lists that Sydney created.
            </div>
            <div>
            This was our process over several months of development, during which we met with our client a few times to update her on the current state of the project and make course corrections based on her feedback. 
            </div>
            </p>
            `,
            image: Blank,
            underline: false,
            nextTitle: "",
        },
        {
            title: "<h2 id='Double Vision Research Project'>Double Vision Research Project</h2>",
            tags: ["UX Research", "UX Testing", "VR Development", "Unity"],
            description: `
            <p>
            A research study examining accessibility features addressing users with double vision in VR.
            <div>
            As part of the study, we created an application that would allow a user to individually move the camera rendering to the left or right lens in Unity. We hypothesized that this feature would allow a user to, in practice, cancel out their double vision while in VR. One of our research partners has diplopia and acted as our primary tester. Based on anecdotal evidence from our research partner, the application did have a noticeable effect in adjusting their double vision but reported that it felt unnatural since their eyes have different levels of strength and have become accustomed to seeing the way they do.
            </div>
            </p>
            `,
            image: Blank,
            underline: false,
            nextTitle: "",
        },
        {
            title: "<h2 id='Quickshot VR'>Quickshot VR</h2>",
            tags: ["VR Development", "Unity", "UX Research", "Game Design"],
            description: `
            <p>
            Quickshot is a VR wave defense game built in Unity and targeted for PC VR platforms. Equipped with a crossbow, players must defend their castle against an endless onslaught of enemies for as long as possible.
            <div>
            Developed as one of my bachelor's degree capstone projects, I have worked on Quickshot on and off for three years across multiple classes. In GIMM 290, based on the requirement that I developed for VR, I began by ideating on ideas and prototyping game loops before deciding on a wave defense style game. I did the bulk of the programming in GIMM 350. During GIMM 330 and 370 I modeled, textured, rigged, and animated everything in the game. I did all 3D art and created procedural textures for my models in Blender. Throughout GIMM 360, I made all of the sound effects in the game. 
            </div>
            <div>
            I originally designed for the player to defend a single tower, and enemies would charge from all sides. On each side was a mounted ballista that players could grab and aim at enemies to shoot. This design ended up being too cumbersome and limiting, so I changed the design to give players a crossbow to wield and modified enemies spawning so that enemies would only come from a single direction.
            </div>
            <div>
            Once I had a working game loop, I did waves of playtesting as I continued to develop and improve the game. Most recently, I completed a Formative Qualitative Research Study. I have since made changes based on the feedback.
            </div>
            </p>
            `,
            image: Blank,
            underline: false,
            nextTitle: "",
        },
        {
            title: "<h2 id='Bronco Plus Action Board'>Bronco Plus Action Board</h2>",
            tags: ["UX/UI Design", "Augmented Reality", "Figma", "Product Design", "SwiftUI"],
            description: `
            <p>
            Quickshot is a VR wave defense game built in Unity and targeted for PC VR platforms. Equipped with a crossbow, players must defend their castle against an endless onslaught of enemies for as long as possible.
            <div>
            Developed as one of my bachelor's degree capstone projects, I have worked on Quickshot on and off for three years across multiple classes. In GIMM 290, based on the requirement that I developed for VR, I began by ideating on ideas and prototyping game loops before deciding on a wave defense style game. I did the bulk of the programming in GIMM 350. During GIMM 330 and 370 I modeled, textured, rigged, and animated everything in the game. I did all 3D art and created procedural textures for my models in Blender. Throughout GIMM 360, I made all of the sound effects in the game. 
            </div>
            <div>
            I originally designed for the player to defend a single tower, and enemies would charge from all sides. On each side was a mounted ballista that players could grab and aim at enemies to shoot. This design ended up being too cumbersome and limiting, so I changed the design to give players a crossbow to wield and modified enemies spawning so that enemies would only come from a single direction.
            </div>
            <div>
            Once I had a working game loop, I did waves of playtesting as I continued to develop and improve the game. Most recently, I completed a Formative Qualitative Research Study. I have since made changes based on the feedback.
            </div>
            </p>
            `,
            image: Blank,
            underline: true,
            nextTitle: "Game Development",
        },
        {
            title: "<h2 id='Ballin’t'>Ballin’t</h2>",
            tags: ["Project Management", "Team Management", "Game Design", "Unity Engine"],
            description: `
            <p>
            Ballin’t is a 3D game inspired by Katamari Damacy. Roll your ball through densely packed environments to collect more items than your opponent! Developed in Unity for a class project.
            <div>
            As part of a multiplayer game development course, we were put into four-person teams to develop a split-screen game in Unity and create a custom controller addressing a physical accessibility issue. My team began by ideating on potential game loops. One of my team members suggested creating a Katamari-like game, and we decided to build a prototype game loop. After we tested our prototype, we decided it would be a strong foundation to build our game on. We then ideated on aesthetics and environment that we liked and decided to go with toon shading and use an office environment for our main level. We split out tasks by having a team member research and develop a toon shader, VFX, and build the first half of the environment; one member continued to develop the movement mechanics and split-screen multiplayer functionality; and another team member worked on our accessible controller and game UI. I was the team lead and organized our work during weekly stand-ups. Additionally, I did half of the level design and contributed to the movement mechanics and how objects were picked up and attached to the player.
            </div>
            <div>
            One of the major challenges was making the player's movement feel natural and allowing precise movement when multiple objects got attached to the player. Initially, when the player rolled over an object, it would be added as a child of the player game object and would stick to the position on the player where they collided. But we had issues where once players picked up more than a few objects, moving would become difficult, and players couldn’t always roll in the direction they wanted. I addressed this by changing how player momentum worked so that even if they were at a standstill, they would have enough momentum to roll over an object. I also added a timer to objects so that colliders on collided items would turn off after about 10 seconds so that there was still an effect of rolling over an object. But it wouldn’t prevent movement as more and more objects were picked up.
            </div>
            <div>
            After each of our team members had completed and merged everything, we tested and made some adjustments to improve playability. When we presented in class, we received positive feedback.
            </div>
            </p>
            `,
            image: Blank,
            underline: false,
            nextTitle: "",
        },
        {
            title: "<h2 id='Force Arena'>Force Arena</h2>",
            tags: ["Project Management", "Team Management", "Game Design", "Unreal Engine"],
            description: `
            <p>
            Force Arena is a 3D multiplayer arena fighter game where players use gravity guns to grab objects in the environment around them and throw them at other players to try and knock them out of the arena. Developed in Unreal Engine 5 for a class project.
            <div>
            As part of a multiplayer game development course, we were put into four-person teams and asked to create a network multiplayer game in Unreal Engine 5. We started as a team by ideating potential games. We began by talking about genres that we thought sounded fun. The two that stood out the most were a 2D tower defense game and a 3D arena fighter. After a vote, we decided on the arena fighter and continued ideating on the specific game loop. I suggested the idea of a gravity gun that players could use to pick up objects around the environment and throw them at other players to knock them out of the arena. We then decided on an aesthetic and the specific rules of how players would spawn and re-spawn after being knocked out. At that point, we had a solid gameplay loop and decided to build it out for testing. 
            </div>
            <div>
            With our foundational gameplay loop created, I built our Trello board, split the loop into tasks, and assigned them to everybody. Every week, we had standups to check with each other on our tasks. Once completed, we merged all of our work in GitHub and had our first major test with other classmates playing. Our gravity gun mechanic was working great. It picked up objects and properly collided and imparted force onto other users. Players were also able to successfully connect using their IPs and objects updated in real-time. During that first playtest we found bugs and paint points for players. For instance, we were missing an aiming reticle that made it challenging for players to aim at each other. Additionally, players could get knocked too far out of the arena and wouldn’t spawn back into the arena. We took notes for improvements to make. But we were excited because the players had fun with that game. We got back to development and took care of bug fixes, addressed UX issues, and implemented a more user-friendly lobby creation system. We then presented to the class and received positive feedback from our professor.
            </div>
            </p>
            `,
            image: Blank,
            underline: false,
            nextTitle: "Graphic Design",
        },
        /* {
            title: "<h2 id='Project Sakura'>Project Sakura</h2>",
            tags: ["Game Design", "Level Design", "Unity Engine"],
            description: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            `,
            image: Blank,
            underline: true,
            nextTitle: "Graphic Design",
        }, */
    ]

    const [isSticky, setIsSticky] = useState(true);
    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState(false);

    // const [heights, setHeights] = useState(true);
    const divRefs = useRef([]);

    const handleClose = () => setShow(false);
    const handleShow = (value, info) => {
        setModalInfo(info); 
        setShow(value);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const headerHeight = 50; 

            if (scrollY > headerHeight) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (divRefs.current.length !== displayInfo.length) {
        divRefs.current = Array(displayInfo.length).fill(null).map((_, index) => divRefs.current[index] || React.createRef());
    }

    useEffect(() => {
        const handleClick = (event) => {
            if (event.target.classList.contains('hyperlink')) {
                const info = event.target.getAttribute('data-info');
                handleShow(true, info);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    // useEffect(() => {
    //     // Store id and offsetTop for each divRef
    //     const heightsData = divRefs.current.map(ref => ({
    //         id: ref.current.innerText,
    //         height: ref.current.offsetTop
    //     }));
    //     setHeights(heightsData);
    // }, []);

    // const getHeightById = (id) => {
    //     if(heights.length > 0) {
    //         const foundHeight = heights.find(item => item.id === id);
    //         return foundHeight ? foundHeight.height : null;
    //     }
    // };

    return (
        <Fragment>
            <LeftNav isSticky={isSticky} />
            <ModalComponent show={show} info={modalInfo} handleClose={handleClose}/>
            {/* <Sidebar topHeight={getHeightById('Beam Tours')} bottomHeight={getHeightById('MNDR Virtual Album')} /> */}
            
            <div id="Top" className='main-container Projects'>
                <div className='container'>
                    <h1>Projects</h1>
                </div>
                <div className='container'>
                        <h2 className='nextTitle first-title' id="UX/UI Design">UX/UI Design</h2>

                        {displayInfo.map((info, index) => (
                            <Fragment key={index}>
                                <div className='project'>
                                    <div className="title" ref={divRefs.current[index]} dangerouslySetInnerHTML={{ __html: `<h3 id="${info.title}">${info.title}</h3>` }}></div>
                                    <ul className='tags'>
                                        {info.tags.map((tag, index) => (
                                            <li key={index}>{tag}</li>
                                        ))}
                                    </ul>
                                    <div className='row'>
                                        <div className='col-md-7'>
                                            <div className='desc' dangerouslySetInnerHTML={{ __html: info.description }}></div>
                                        </div>
                                        <div className='col-md-5'>
                                            <img className='project-image' src={info.image} alt="Placeholder Image" />
                                        </div>
                                    </div>
                                    {info.underline ? 
                                        <Fragment>
                                            <div className='underline'></div> 
                                            <h2 className='nextTitle' id={info.nextTitle}>{info.nextTitle}</h2>
                                        </Fragment>
                                    
                                    : null}
                                </div>
                            </Fragment>
                        ))}

                        <div className='graphic-design'>
                            <div className='row flex-container'>
                                <img src={Blank} alt="Placeholder Image" />
                                <img src={Blank} alt="Placeholder Image" />
                                <img src={Blank} alt="Placeholder Image" />
                                <img src={Blank} alt="Placeholder Image" />
                                <img src={Blank} alt="Placeholder Image" />
                                <img src={Blank} alt="Placeholder Image" />
                            </div>
                        </div>


                </div>
            </div>
        </Fragment>
    );
};

const LeftNav = ({ isSticky }) => {
    return (
        <div className={`navigation ${isSticky ? 'sticky' : ''}`}>
                <h5><HashLink to="#Top" className='nav-title'>Go To Top</HashLink></h5>
                <div className='navigation-content'>
                    <HashLink to="#UX/UI Design"><h5>UX/UI Design</h5></HashLink>
                        <span><HashLink to="#FATE">Fate</HashLink></span>
                        <span><HashLink to="#Beam Tours">Beam Tours</HashLink></span>
                        <span><HashLink to="#Freeman Tour">Freeman Tour</HashLink></span>
                        <span><HashLink to="#A Mind For All Seasons">A.M.A.S.</HashLink></span>
                    <HashLink to="#XR Development"><h5>XR Development</h5></HashLink>
                        <span><HashLink to="#MNDR Virtual Album">MNDR</HashLink></span>
                        <span><HashLink to="#Double Vision Research Project">Double Vision</HashLink></span>
                        <span><HashLink to="#Quickshot VR">Quickshot</HashLink></span>
                        <span><HashLink to="#Bronco Plus Action Board">Bronco Plus Action</HashLink></span>
                    <HashLink to="#Game Development"><h5>Game Development</h5></HashLink>
                        <span><HashLink to="#Ballin’t">Balln’t</HashLink></span>
                        <span><HashLink to="#Force Arena">Force Arena</HashLink></span>
                        {/* <span><HashLink to="#Project Sakura">Project Sakura</HashLink></span> */}
                    <HashLink to="#Graphic Design"><h5>Graphic Design</h5></HashLink>
                </div>
        </div>
    );
};

const ModalComponent = ({show, info, handleClose}) => {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>   
          </Modal.Header>
          <Modal.Body>
            <div dangerouslySetInnerHTML={{ __html: info }}></div>
          </Modal.Body>
        </Modal>
      </>
    );
}

// const Sidebar = ({ topHeight, bottomHeight }) => {
//     const [sidebarPosition, setSidebarPosition] = useState('absolute');
//     const [sidebarHeight, setSidebarHeight] = useState('100px');
  
//     useEffect(() => {
//       const handleScroll = () => {
//         const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
//         if (scrollPosition > topHeight) {
//           setSidebarPosition('fixed');
//           setSidebarHeight(`calc(100vh - ${topHeight}px)`); // Adjust height to fit viewport minus topHeight
//         } else {
//           setSidebarPosition('absolute');
//           setSidebarHeight('100px'); // Reset height when not fixed
//         }
//       };
  
//       window.addEventListener('scroll', handleScroll);
  
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, [topHeight]);
  
//     const sidebarStyle = {
//       overflow: 'auto',
//       position: sidebarPosition,
//       top: topHeight,
//       width: '100px',
//       height: sidebarHeight, // Dynamic height
//       backgroundColor: '#ccc',
//     };
  
//     return (
//       <div>
//         <div style={sidebarStyle}>Sidebar</div>
//       </div>
//     );
//   };

function mapState(state) {
    const { session } = state;
    return { session };
}

const actionCreators = {
};

const connection = connect(mapState, actionCreators)(Projects);
export { connection as Projects };