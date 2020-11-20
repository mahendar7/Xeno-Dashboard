import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import { Badge } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import AppsIcon from '@material-ui/icons/Apps';
import './Header.css'

function Header() {
    return (
        <div className="header bg-white d-flex justify-content-between align-items-center p-2">
            <div className="d-flex justify-content-between align-items-center">
                <button className=" btn btn-light text-primary">Pages <ExpandMoreIcon/></button>
                <button className="btn">Reports <ExpandMoreIcon/></button>
                <button className="btn">Apps <ExpandMoreIcon/></button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <SearchIcon className="mr-3"/>
                <Badge color="primary" variant="dot" className="mr-3">
                    <NotificationsNoneIcon/>
                </Badge>
                <SettingsOutlinedIcon className="mr-3"/>
                <LanguageIcon className="mr-3"/>
                <span className="mr-3">Hi, <b>Alex</b></span>
                <img src="/profile.jpg" alt="profile" className="profileImg mr-3"/>
                <AppsIcon  className="mr-3"/>
            </div>
        </div>
    )
}

export default Header
