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
          <div className="page-content-container">
            <h4>Dashboard</h4>
            <div className="property-card-container">
              <div className="container-fluid">
                <div className="row">
                  <div className="col p-0">
                    <div className="property-cards">
                      <div className="property-card-right">
                        <span>Property for sale</span>
                        <h3>1,200</h3>
                      </div>
                      <div className="property-card-left">
                        <ProgressBar />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="property-cards">
                      <div className="property-card-right">
                        <span>Property for sale</span>
                        <h3>1,200</h3>
                      </div>
                      <div className="property-card-left">
                        <ProgressBar />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="property-cards">
                      <div className="property-card-right">
                        <span>Property for sale</span>
                        <h3>1,200</h3>
                      </div>
                      <div className="property-card-left">
                        <ProgressBar />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="property-cards">
                      <div className="property-card-right">
                        <span>Property for sale</span>
                        <h3>1,200</h3>
                      </div>
                      <div className="property-card-left">
                        <ProgressBar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="column-chart-conatiner">
                  <ColumnChart />
                </div>
              </div>
              <div className="col-4">
                <div className="column-chart-conatiner">
                  <LineProgress />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
