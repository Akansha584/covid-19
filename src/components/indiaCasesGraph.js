import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },

export default class IndiaCasesGraph extends PureComponent {
    

  render() {
    
    const {total_cases,active_cases,deaths} = this.props.indiaData;
    const data = [
        {
          name: 'Page A', active: {active_cases}, total: {total_cases}, deaths: {deaths}
        }]
    
    return (
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 20000000]}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="total" stackId="a" fill="#98FB98" />
        <Bar dataKey="active" stackId="a" fill="#FFFF66" />      
        <Bar dataKey="deaths" stackId="a" fill="#B22222" />
      </BarChart>
    );
  }
}

