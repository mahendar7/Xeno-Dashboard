import React from 'react'
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import TitleSection from '../TitleSection/TitleSection';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';

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

function TopProducts() {
    const listItems = [
        {name:'HTML 5 Templates',paragraph:`Font and Admin ${'&'} Email`,percentage:79, color:"red"},
        {name:'Wordpress Themes',paragraph:`Font and Admin ${'&'} Email`,percentage:21, color:"blue"},
        {name:'Ecomerce Websites',paragraph:`Font and Admin ${'&'} Email`,percentage:18, color:"green"},
        {name:'UX/UI Design',paragraph:`Font and Admin ${'&'} Email`,percentage:4, color:"blue"},
        {name:'Freebie Themes',paragraph:`Font and Admin ${'&'} Email`,percentage:34, color:"yello"},
    ]

    return (
        <div className="topProducts bg-white border p-4 mx-2 my-2 mt-0 col-xs-12 col-sm-12 col-md-4">
            <TitleSection title='Top Productss'/>
            <hr/>

            <div className="topProducts-body d-flex justify-content-center align-items-center m-2 mb-4">
                <div className="feature bg-primary text-white p-2 mr-2 rounded d-flex flex-column justify-content-center align-items-center">
                    <PollOutlinedIcon className="mb-1"/>
                    <h6>Settings</h6>
                </div>
                <div className="feature bg-light text-muted p-2 px-4 mr-2 rounded d-flex flex-column justify-content-center align-items-center">
                    <CodeOutlinedIcon className="mb-1"/>
                    <h6>Code</h6>
                </div>
                <div className="feature bg-light text-muted p-2 px-3 mr-2 rounded d-flex flex-column justify-content-center align-items-center">
                    <AcUnitOutlinedIcon className="mb-1"/>
                    <h6>Design</h6>
                </div>
            </div>

            <div className="list-progress-bars d-flex flex-column justify-content-between">
                
                {listItems.map((item) => (
                    <div className="list-progress-bars-item my-1 d-flex justify-content-between align-items-center">
                        <div className="list-progress-left">
                            <h6>{item.name}</h6>
                            <p className="text-muted">Font Admin {'&'} Email</p>
                        </div>
                        <div className="list-progress-right">
                            <h6 className="text-muted">+{item.percentage} %</h6>
                            <LinearProgressWithLabel value={50} />
                        </div>
                    </div>
                ))}
            </div>


            
                
        
        </div>
    )
}

export default TopProducts
