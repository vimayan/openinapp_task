import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ResponsivePieChart = () => {
  const chartOptions = {
    series: [44, 55, 13],
    options: {
      chart: {
        type: "pie",
        events: {
          // Apply custom CSS to the chart after it has been rendered
          mounted: function (chartContext, config) {
            const chartContainer = chartContext.el.parentNode.parentNode;
            const chartElement =
              chartContainer.querySelector(".apexcharts-canvas");

            // Apply CSS to align text start (left-aligned)
            chartElement.style.textAlign = "start";
          },
          updated: function (chartContext, config) {
            const chartContainer = chartContext.el.parentNode.parentNode;
            const chartElement =
              chartContainer.querySelector(".apexcharts-canvas");

            // Apply CSS to align text start (left-aligned)
            chartElement.style.textAlign = "start";
          },
        },
      },
      labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        formatter: function (seriesName, opts) {
          return (
            "<span>" +
            "<b>" +
            seriesName +
            "</b>" +
            "</br>" +
            "<small>" +
            ("&emsp;" + opts.w.globals.series[opts.seriesIndex] + "%") +
            "</small>" +
            "</span>"
          );
        },
        show: true,
        fontSize: "14px",
        fontWeight: 400,
      },

      responsive: [
        {
          breakpoint: 1920, // XL size screen breakpoint
          options: {
            chart: {
              width: 400, // Maximum width on XL size screens
            },
            legend: {
              position: "right",
            },
          },
        },
        {
          breakpoint: 1200, // XL size screen breakpoint
          options: {
            chart: {
              width: 280, // Maximum width on XL size screens
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 998, // XL size screen breakpoint
          options: {
            chart: {
              width: 400, // Maximum width on XL size screens
            },
            legend: {
              position: "right",
            },
          },
        },
        {
          breakpoint: 500, // Mobile breakpoint
          options: {
            chart: {
              width: 300, // Full width on smaller screens
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  const [setting, setSetting] = useState(chartOptions);

  useEffect(() => setSetting(chartOptions));

  return (
    <Chart
      options={setting.options}
      series={setting.series}
      type="pie"
      height={200}
    />
  );
};

export default ResponsivePieChart;
