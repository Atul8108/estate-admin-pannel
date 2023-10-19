import React from 'react'
import Header from '../../components/Header/Header'
import ColumnChart from '../../components/Chart/ColumnChart'
import  ProgressBar from '../../components/Chart/ProgressBar'

const Dashboard = () => {
    return (
        <>
            <section className="main-layout">
                <Header />
                <div className='page-content'>
                    <p>Dashboard</p>
                    <p style={{backgroundColor:"var(--bg-color)"}}>
                        <ColumnChart/>
                        <ProgressBar/>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Dashboard