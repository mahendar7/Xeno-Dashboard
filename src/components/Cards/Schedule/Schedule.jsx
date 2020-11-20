import React from 'react'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import NavigateBeforeSharpIcon from '@material-ui/icons/NavigateBeforeSharp';
function Schedule() {
    return (
        <div className="announcements bg-white border p-4 mx-2 my-2 mt-0 col-xs-12 col-sm-6 col-md-4">
            <div className="announcements-title d-flex justify-content-between align-items-center">
                <h5 className="text-muted">TODAY"S SCHEDULE</h5>
                <div className="announcements-title-right">
                    <NavigateBeforeSharpIcon className="bg-light mr-1"/>
                    <NavigateNextOutlinedIcon className="bg-light"/> 
                </div>
            </div>
            <div className="announcements-body">
                <h6 className="py-2">UI/UX Design Updates</h6>
                <h6 className="text-primary font-weight-bold">11:15M - 12:30PM</h6>
            </div>

            <div className="date-section d-flex justify-content-between align-items-center">
                <h6 className="py-4"><LocationOnOutlinedIcon/> 246 R SL Manhettan NY..</h6>
                <button className="btn btn-light">
                    VIEW MAP
                </button>
            </div>
        </div>
    )
}

export default Schedule
