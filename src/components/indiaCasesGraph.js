import React, { PureComponent } from "react";
import "./covidCases.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class IndiaCasesGraph extends PureComponent {
  render() {
    var data = [];
    this.props.indiaGraph_cases.map((key) => {
      return data.push({
        name: this.props.indiaGraph_dates,
        Total: key.total_cases,
        Recovered: key.recovered,
        Deaths: key.deaths,
      });
    });

    return (
      <ResponsiveContainer width="95%" height={300}>
        <BarChart
          width={900}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total" fill="#82ca9d" />
          <Bar dataKey="Recovered" fill="#6D9BF1" />
          <Bar dataKey="Deaths" fill="#B80000 " />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
