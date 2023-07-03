import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const SplineChart = ({data}) => {
  const options = {
    chart: {
      id: "spline-chart",
      toolbar: {
        show: false,
      },
      background: "white",
      padding: "40px",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    stroke: {
      curve: "smooth",
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetY: -20,
    },
    title: {
      text: "Activities",
      align: "left",
      offsetY: 20,
    },
  };

  const series = [
    {
      name: "Guest",
      data: data.lineData['guest'],
    },
    {
      name: "User",
      data: data.lineData['user'],
    },
  ];

  const [setting, setsetting] = useState({ options, series });

  useEffect(() => {
    setsetting({ options, series });
  },[data]);

  return (
    <div className="spline-chart md:px-[40px] bg-[white] min-w-[200px] max-w-[1000px] md:rounded-2xl">
      <Chart
        options={setting.options}
        series={setting.series}
        type="line"
        width={"100%"}
        height={350}
      />
    </div>
  );
};

export default SplineChart;
