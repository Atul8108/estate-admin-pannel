import React from "react";
import Header from "../../components/Header/Header";
import "./Dashboard.css";
import ColumnChart from "../../components/Chart/ColumnChart";
import ProgressBar from "../../components/Chart/ProgressBar";
import LineProgress from "../../components/Chart/LineProgress";

const Dashboard = () => {
  return (
    <>
      <section className="main-layout">
        <Header />
        <div className="page-content">
          <div className="container property-card-container">
            <h4 className="mr-4 m-0">Dashboard</h4>
            <div className="row row-style">
              <div className="col-sm-3">
                <div className="property-card">
                  <div className="property-card-info">
                    <p>Total Customer</p>
                    <p>000</p>
                  </div>
                  <div className="property-card-progressBar">
                    <ProgressBar />
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="property-card">
                  <div className="property-card-info">
                    <p>Total Customer</p>
                    <p>000</p>
                  </div>
                  <div className="property-card-progressBar">
                    <ProgressBar />
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="property-card">
                  <div className="property-card-info">
                    <p>Total Customer</p>
                    <p>000</p>
                  </div>
                  <div className="property-card-progressBar">
                    <ProgressBar />
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="property-card">
                  <div className="property-card-info">
                    <p>Total Customer</p>
                    <p>000</p>
                  </div>
                  <div className="property-card-progressBar">
                    <ProgressBar />
                  </div>
                </div>
              </div>
            </div>
            <div className="bar-chart">
              <ColumnChart />
            </div>
            <div>{/* <LineProgress /> */}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
