import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);  //array which contain all the values
    const totalMaximum=Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}          //unique label for each chartbar can be used as a id.
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
