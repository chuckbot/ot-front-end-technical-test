import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { TypesProps } from "../../helpers/types";

function BarScoreChart(props) {
  const { dataTypes } = props;
  const dataChart = Object.entries(dataTypes).map((el) =>
    Object.assign({ name: el[0], value: el[1] })
  );

  return (
    <div>
      <p>Association Score vs Data Type</p>
      <BarChart
        width={500}
        height={300}
        data={dataChart}
        margin={{
          top: 35,
          right: 50,
          left: 20,
          bottom: 55,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          angle={-45}
          position="insideLeft"
          textAnchor="end"
          label={{ value: "Data Type", position: "insideBottom" }}
        />
        <YAxis
          label={{ value: "Score", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Bar dataKey="value" fill="#398AC8" />
      </BarChart>
    </div>
  );
}

BarScoreChart.propTypes = {
  dataTypes: TypesProps,
};

export default BarScoreChart;
