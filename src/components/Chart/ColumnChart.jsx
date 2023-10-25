import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = () => {
  return (
    <>
      <div className="d-flex">
        <Chart
          type="bar"
          height={550}
          width={1400}
          series={[
            {
              name: "sales",
              data: [
                {
                  x: "Jan",
                  y: 400,
                },
                {
                  x: "Feb",
                  y: 430,
                },
                {
                  x: "Mar",
                  y: 448,
                },
                {
                  x: "Apr",
                  y: 470,
                },
                {
                  x: "May",
                  y: 540,
                },
                {
                  x: "Jun",
                  y: 580,
                },
                {
                  x: "Jul",
                  y: 690,
                },
                {
                  x: "Aug",
                  y: 690,
                },
              ],
            },
            {
              name: "sales",
              data: [
                {
                  x: "Jan",
                  y: 500,
                },
                {
                  x: "Feb",
                  y: 130,
                },
                {
                  x: "Mar",
                  y: 148,
                },
                {
                  x: "Apr",
                  y: 50,
                },
                {
                  x: "May",
                  y: 54,
                },
                {
                  x: "Jun",
                  y: 80,
                },
                {
                  x: "Jul",
                  y: 60,
                },
                {
                  x: "Aug",
                  y: 90,
                },
              ],
            },
          ]}
          options={{
            title: { text: "Total Revenue" },
            width: "100%",
            dataLabels: {
              enabled: false,
            },
            legend: {
              show: false,
            },
            grid: {
              show: false,
              xaxis: {
                lines: {
                  show: false,
                },
              },
              yaxis: {
                lines: {
                  show: false,
                },
              },
            },
            chart: {
              redrawOnParentResize: true,
            },
          }}
        ></Chart>
      </div>
    </>
  );
};

export default ColumnChart;
