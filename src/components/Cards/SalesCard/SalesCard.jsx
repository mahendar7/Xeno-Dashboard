import React from 'react'
import './SalesCard.css'
import ProgressBar from '../ProgressBar/ProgressBar';
import TitleSection from '../TitleSection/TitleSection';

function SalesCard() {
    return (
        <div className="sales-card bg-white border p-4 mx-2 my-2 mt-0 col-xs-12 col-sm-6 col-md-4">
            <TitleSection title='Author Sales'/>
            <div className="body-section d-flex justify-content-around align-items-center p-2">
                <h5 className="w-100 bg-strike">$ 64M</h5>
                <div className="progress-bars d-flex justify-content-between align-items-center w-100">
                    <ProgressBar percentage={50}/>
                    <ProgressBar  percentage={70}/>
                    <ProgressBar  percentage={100}/>
                    <ProgressBar  percentage={30}/>
                    <ProgressBar  percentage={90}/>
                    <ProgressBar  percentage={70}/>
                </div>
            </div>
        </div>
    )
}

export default SalesCard
