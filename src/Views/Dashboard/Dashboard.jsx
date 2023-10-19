import React from 'react'
import Header from '../../components/Header/Header'
import "./Dashboard.css"
import ColumnChart from '../../components/Chart/ColumnChart'
import ProgressBar from '../../components/Chart/ProgressBar'

const Dashboard = () => {
    return (
        <>
            <section className="main-layout">
                <Header />
                <div className='page-content'>
                    <div className='row'>
                        <h4>Dashboard</h4>
                    <div className='col property-card-container'>
                        <div className='property-card'>
                            <p>Total Customer</p>
                            <p>000</p>
                            <ProgressBar />
                        </div>
                        <div className='col property-card'>
                            <p>Total Customer</p>
                            <p>000</p>
                            <ProgressBar />
                        </div>
                        <div className='col property-card'>
                            <p>Total Customer</p>
                            <p>000</p>
                            <ProgressBar />
                        </div>
                        <div className='col property-card'>
                            <p>Total Customer</p>
                            <p>000</p>
                            <ProgressBar />
                        </div>
                    </div>

                    <div>
                        <ColumnChart />
                    </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard