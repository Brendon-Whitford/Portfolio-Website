//--------------------------------------------------
//Navbar for the application
//--------------------------------------------------

import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = ({}) => {
    return (
        <Fragment>
            <div className='footer'>
                <MDBFooter>
                <div className='text-center footer-info'>
                    Designed by Brendon Whitford. Developed by Alexander Spoon.
                    &copy; {new Date().getFullYear()} Copyright{' '} All Rights Reserved
                </div>
                </MDBFooter>
            </div>
        </Fragment>
    )
};

function mapState(state) {

}

const actionCreators = {
};

const connection = connect(mapState, actionCreators)(Footer);
export { connection as Footer };