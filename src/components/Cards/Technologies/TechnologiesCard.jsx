import React, { Component } from 'react'
import TitleSection from '../TitleSection/TitleSection'
import ReactApexChart from 'react-apexcharts';
import './TechnologiesCard.css'

class TechnologiesCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
          series: [44, 55, 15],
          options: {
            chart: {
              type: 'donut',
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                    show:false,
                }
              }
            }],
            legend: {
                show:false,
            },
            dataLabels: {
                enabled: false
            }
          },
        };
      }

    render() {
        return (
            <div className="sales-card bg-white p-4 col-xs-12 col-sm-6 col-md-4">
                <div className="mx-2">
                  <TitleSection title='Technologies'/>

                  <div className="body-section d-flex justify-content-around align-items-center p-2">
                      <h5 className="bg-strike mr-2">9.3M</h5>
                      <div className="progress-bars d-flex justify-content-between align-items-center w-100">
                          <div className="progress-details">
                              <ul >
                                <li className="mb-1">HTML</li>
                                <li className="mb-1">CSS</li>
                                <li className="mb-1">Angular</li>
                              </ul>
                          </div>
                          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
                      </div>
                  </div>
                </div>
            </div>
        )
    }
}


export default TechnologiesCard
