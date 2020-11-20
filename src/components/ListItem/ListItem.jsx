import React from 'react'
import './ListItem.css';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import Badge from '@material-ui/core/Badge';
import { Tooltip } from '@material-ui/core';

function ListItem({data,sideBarOpened}) {
    return (
        <div className="list-item cursor-pointer d-flex justify-content-between align-items-center py-2 px-3">
            <div className="d-flex justify-content-between align-items-center">
                <Tooltip title={data.title} placement="right">
                    <data.icon 
                    className={['dot', 'mr-2', 'text-secondary', !sideBarOpened && 'my-1']}/>
                 </Tooltip>
                { sideBarOpened && <span>{data.title}</span> }
            </div>
            {sideBarOpened &&
                <div className="d-flex justify-content-between align-items-center">
                    {data.title === 'Extended' && <Badge badgeContent={4} color="primary" className="mr-3"></Badge>}
                    <NavigateNextOutlinedIcon/>
                </div>
            }
        </div>
    )
}

export default ListItem
