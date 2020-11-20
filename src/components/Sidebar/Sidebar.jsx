import React, { useState } from 'react'
import './Sidebar.css';
import MenuIcon from '@material-ui/icons/Menu';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import  ListItem  from '../ListItem/ListItem';
import BarChartIcon from '@material-ui/icons/BarChart';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import AppsIcon from '@material-ui/icons/Apps';
import EventNoteIcon from '@material-ui/icons/EventNote';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import TableChartIcon from '@material-ui/icons/TableChart';
import ExploreIcon from '@material-ui/icons/Explore';
import { Tooltip } from '@material-ui/core';

function Sidebar() {
    const [arrowClicked, setArrowClicked] = useState(true);
    const [sideBarOpened, setsideBarOpened] = useState(true);

    const handleArrowClick = (e) =>{
        e.preventDefault()
        setArrowClicked(!arrowClicked)
    }

    const handleSidebarToggle = (e) =>{
        e.preventDefault()
        setsideBarOpened(!sideBarOpened)
    }

    const menu1 = [{title: 'Base',icon: ExploreIcon},{title: 'custom',icon: DonutSmallIcon},
    {title: 'Extended',icon: TableChartIcon},{title: 'Widgets',icon: DonutSmallIcon},
    {title: 'Forms',icon: FormatShapesIcon}, {title: 'Icons',icon: AppsIcon}]

    const menu2 = [{title: 'Calendar',icon: EventNoteIcon},{title: 'Pricing',icon: DonutLargeIcon},
    {title: 'Invoices',icon: ReceiptIcon},{title: 'FAQs',icon: LiveHelpIcon}]


    return (
        <div className={['sidebar', 'bg-dark','text-white', !sideBarOpened && 'smallBar'].join(' ')} >
            <div className="bg-black-1 d-flex justify-content-between align-items-center  py-2 px-3">
                {sideBarOpened && <img src="/logo.jpg" alt="logo" className="logo cursor-pointer"/>}
                    <MenuIcon className="menuIcon cursor-pointer" onClick={handleSidebarToggle}/>
            </div>

            <div className="select mb-2" >
                <div className="main cursor-pointer list-item" onClick={handleArrowClick}>
                    <div className="d-flex justify-content-between align-items-center py-2 px-3">
                        <div>
                            <Tooltip title="Dashboard" placement="right"><BarChartIcon className="mr-2 text-secondary"/></Tooltip>
                            { sideBarOpened && <span>Dashboards</span> }
                        </div>
                        {
                            sideBarOpened && <div>
                                {arrowClicked ?  <ArrowDropUpIcon /> : <ArrowDropDownIcon/>}
                            </div>
                        }
                    </div>
                </div>

                {sideBarOpened && (arrowClicked && 
                    ([1,2,3].map((item) => (
                    <div className="select-option cursor-pointer d-flex justify-content-around align-items-center p-2">
                        <span>.</span>
                        <span>Navy Aside {item}</span>
                    </div>
                    )))
                )}

                <ListItem data={{title:'Layout Builder',icon: DonutSmallIcon}} sideBarOpened={sideBarOpened}/>
            </div>

            {sideBarOpened && <span className="py-4 px-3">Components</span>}
            
            <div className="components  mb-3">
                {menu1.map((item) => (
                    <ListItem data={item} sideBarOpened={sideBarOpened}/>
                ))}
            </div>

            {sideBarOpened && <span className="py-4 px-3">Custom</span>}

            <div className="components">
                {menu2.map((item) => (
                    <ListItem data={item} sideBarOpened={sideBarOpened}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
