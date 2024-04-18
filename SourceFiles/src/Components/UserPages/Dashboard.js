import React, { Fragment, useEffect, useState } from 'react';
import { userActions } from "../../Actions";
import { connect } from 'react-redux';
import ProfilePicture from '../../Images/ProfilePicture.PNG'; 
import MNDR from '../../Images/MNDRportfolio.PNG';
import DVRP from '../../Images/DVresearchscreenshot.PNG';
import Blank from '../../Images/blank_image.PNG'; 

const Dashboard = ({ }) => {
    return (
        <Fragment>
            <div className='main-container Dashboard'>

                <div className='container'>

                    <div className='row top-section'>
                        <div className='col-md-6'>
                            <img className='profile-picture' src={ProfilePicture} alt="Profile Picture" />
                        </div>
                        <div className='col-md-6 introduction'>
                            <h1>Brendon Whitford</h1>
                            <h3>UX/UI Designer / Product Manager / XR Developer</h3>
                            <div className='description'>
                                <h3>Boise State University Graduate </h3><span>Spring 2024 Expected</span>
                                <p>Bachelors in GIMM (Games Interactive Media Mobile) </p>
                                <p>Minor in Japanese Studies</p>
                                <p>Certificate in UX Design </p>
                                
                                <button className='more-projects' onClick={() => {window.location.assign(`${window.location.origin}/#/Account`);}}>
                                    More About Me {"->"}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='row projects'>
                        <div className='col-lg-6'>
                            <h1>MNDR Virtual Album</h1>
                            <img src={MNDR} alt="Placeholder Image" />
                        </div>
                        <div className='col-lg-6'>
                            <h1>Double Vision Research Project</h1>
                            <img src={DVRP} alt="Placeholder Image" />
                        </div>
                    </div>
                    <button className='more-projects' onClick={() => {window.location.assign(`${window.location.origin}/#/Projects`);}}>
                            More Projects {"->"}
                    </button>
                </div>

                <div className='container'>
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

const connection = connect(mapState, actionCreators)(Dashboard);
export { connection as Dashboard };