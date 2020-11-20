import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './TitleSection.css';

function TitleSection({title}) {
    return (
        <div className="title-section d-flex justify-content-between">
            <h6>{title}</h6>
            <MoreHorizIcon/>
        </div>
    )
}

export default TitleSection
