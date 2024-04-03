import React, { Fragment, useEffect, useState, useRef } from 'react';
import { userActions } from "../../Actions";
import { connect } from 'react-redux';
import Blank from '../../Images/blank_image.PNG'; 
import StickyBox from "react-sticky-box";
import Modal from 'react-bootstrap/Modal';
import { HashLink } from 'react-router-hash-link';

const Projects = ({}) => {
    const displayInfo = [
        {
            title: "<h2 id='FATE'>FATE</h2>",
            tags: ["Product Management", "UX/UI Design", "Figma", "Client Relations"],
            description: `
            <p >
                In this project I started by creating a project 
                
                <span class="hyperlink" data-info='
                <div>
                    <img src="${Blank}" alt="Placeholder Image" />
                    <p class="example-modal-css">Sample</p>
                </div>
                '>features list</span> 

                
                with user permissions,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.               
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                LBronco Plus Action Board is an Augmented Reality iPad app aimed to assist non-verbal individuals in efficient real-time and real-space communication through displaying visual iconography and text that can be viewed by two users on separate iPads in AR.
            </p>
            `,
            image: Blank,
            underline: true,
            nextTitle: "Game Development",
        },
        {
            title: "<h2 id='Balln’t'>Balln’t</h2>",
            tags: ["Project Management", "Team Management", "Game Design", "Unity Engine"],
            description: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            `,
            image: Blank,
            underline: false,
            nextTitle: "",
        },
        {
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
        },
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
                        <span><HashLink to="#Balln’t">Balln’t</HashLink></span>
                        <span><HashLink to="#Force Arena">Force Arena</HashLink></span>
                        <span><HashLink to="#Project Sakura">Project Sakura</HashLink></span>
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