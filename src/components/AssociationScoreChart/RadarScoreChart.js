import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { TypesProps } from "../../helpers/types";

function RadarScoreChart(props) {
  const { dataTypes } = props;
  const dataChart = Object.entries(dataTypes).map((el) => Object.assign({ name: el[0], value: el[1] }));

  return (
    <div>
      <p>Association Score vs Data Type</p>
      <RadarChart cx={250} cy={125} outerRadius={100} width={500} height={250} data={dataChart}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="value" stroke="#398AC8" fill="#398AC8" fillOpacity={0.5} dot />
      </RadarChart>
    </div>
  );
}

RadarScoreChart.propTypes = {
  dataTypes: TypesProps,
};

export default RadarScoreChart;
