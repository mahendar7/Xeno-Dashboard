import React from 'react'
import Header from '../Header/Header';
import './Dashboard.css';
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SalesCard from '../Cards/SalesCard/SalesCard';
import TechnologiesCard from '../Cards/Technologies/TechnologiesCard';
import TotalOrdersCard from '../Cards/TotalOrders/TotalOrdersCard';
import Announcements from '../Cards/Announcements/Announcements';
import Schedule from '../Cards/Schedule/Schedule';
import TopProducts from '../Cards/TopProducts/TopProducts';
import Statistics from '../Cards/Statistics/Statistics';

function Dashboard(props) {
    
    return (
        <div className="dashboard w-100">
            <Header sideBarOpened={props.sideBarOpened} setsideBarOpened={props.setsideBarOpened}/>
            <div className="hero d-flex justify-content-between align-items-center my-3">
                <div className="d-flex px-4">
                    <h5 className="mr-3">Dashboard</h5>
                    <HomeIcon className="mr-1 text-muted"/>
                    <span className="mr-2 text-muted">.</span>
                    <h6 className="mr-2 text-muted">Dashboards</h6>
                    <span className="mr-2 text-muted">.</span>
                    <h6 className="text-muted">Navy Aside</h6>
                </div>
                <div className="d-none d-md-block">
                    <button className="btn btn-primary mr-4">Today: Aug 18 <EventNoteIcon/></button>
                </div>
            </div>

            <div className="6-cards my-3 mx-2 row">
                <SalesCard/>
                <TechnologiesCard/>
                <TotalOrdersCard/>
                <Announcements mainTitle="Announcements" 
                    paragraph="To start a blog think of a topic about and first brainstarm part is ways to write details<"
                    bodyTitle="Incredibly Positive Reviews"
                    progress={false}
                />
                <Announcements mainTitle="Projects" 
                    paragraph="To start a blog think of a topic about and first brainstarm part is ways to write details<"
                    bodyTitle="First Milestone Achievement" progress={true}/>
                    <Schedule
                />
            </div>
            

            {/* <div className="6-cards my-3 mx-2 row">
                
            </div> */}


            <div className="2-cards my-3 mx-2 row">
                <TopProducts/>
                <Statistics/>
            </div>
        </div>
    )
}

export default Dashboard
