import React from 'react'
import './ProgressBar.css';

function ProgressBar({percentage}) {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="progress vertical">
                <div style={{ height: `${percentage}%` }} className="progress-bar">
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
