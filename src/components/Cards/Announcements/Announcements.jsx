import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';import './Announcements.css';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import NavigateBeforeSharpIcon from '@material-ui/icons/NavigateBeforeSharp';

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
  };

  
function Announcements({mainTitle,bodyTitle,paragraph,progress}) {
    const [progressNumber, setProgressNumber] = React.useState(60);

    return (
        <div className="announcements bg-white border p-4 col-xs-12 col-sm-6 col-md-4">
            <div className="mx-2">
                <div className="announcements-title d-flex justify-content-between align-items-center">
                    <h5 className="text-muted">{mainTitle}</h5>
                    <div className="announcements-title-right">
                        <NavigateBeforeSharpIcon className="bg-light mr-1"/>
                        <NavigateNextOutlinedIcon className="bg-light"/> 
                    </div>
                </div>
                <div className="announcements-body">
                    <h6 className="py-2">{bodyTitle}</h6>
                    <p className="text-muted">To start a blog think of a topic about and first brainstarm part is ways to write details</p>
                </div>

                {progress ? 
                
                    ( <>
                        <div className="progress-title d-flex justify-content-between align-items-center">
                            <h6 className="text-muted">Progress</h6>
                            <span>{progressNumber}%</span>
                        </div>
                        <LinearProgressWithLabel value={progressNumber} />
                    </>
                    )
                    :
                    (
                        <>
                            <div className="date-section d-flex justify-content-between align-items-center">
                                <button className="btn btn-light text-primary">
                                    17 Nov, 2018
                                </button>
                                <button className="btn btn-light">
                                    VIEW
                                </button>
                            </div>
                        </>
                    )
                    
            }
            </div>
        </div>
    )
}

export default Announcements
