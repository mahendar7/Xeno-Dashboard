import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts';
import TitleSection from '../TitleSection/TitleSection'
import './TotalOrdersCard.css'

 class TotalOrdersCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
              name: "Desktops",
              data: [10, 41, 35, 51, 49]
          }],
          options: {
            chart: {
              // height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            stroke: {
              curve: 'smooth'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',],
            }
          },
        
        
        };
      }

    render() {
        return (
            <div className="total-orders-card bg-white p-4 col-xs-12 col-sm-6 col-md-4">
                <div className="mx-2">
                  <TitleSection title='Total Orders'/>

                  <div className="body-section d-flex justify-content-between align-items-center p-2">
                      <h5 className=" bg-strike">17M</h5>
                      <div className="progress-bars d-flex justify-content-between">
                          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={140} />
                      </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default TotalOrdersCard
