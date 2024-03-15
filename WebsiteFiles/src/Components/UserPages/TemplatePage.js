//--------------------------------------------------
//Template page to copy/paste for new pages
//--------------------------------------------------

import React, { Fragment, useEffect, useState } from 'react';
import { userActions } from "../../Actions";
import { connect } from 'react-redux';

const TemplatePage = ({ }) => {
    return (
        <Fragment>
            <div className='main-container defaultpage'>

                <div className='border-container'>
                    <h1>Default Page</h1>
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

const connection = connect(mapState, actionCreators)(TemplatePage);
export { connection as TemplatePage };