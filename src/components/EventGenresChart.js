import React, { PureComponent } from 'react';
import { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const EventGenresChart = ({ events }) => {

    const [data, setData] = useState([]);

    const getData = () => {
        const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
        const data = genres.map((genre) => {
          const value = events.filter(
            (ev) => ev.summary.indexOf(genre) >= 0
          ).length;
          return { name: genre, value };
        });
        return data;
      };

    useEffect(() => {
        setData(getData());
      }, [`${events}`]);

      const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
          <text
            x={x}
            y={y}
            fill="#8884d8"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
      };

    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
      return (
   <ResponsiveContainer width="99%" height={400}>
     <PieChart>
       <Pie
         data={data}
         dataKey="value"
         fill="#6699ff"
         labelLine={false}
         label={renderCustomizedLabel}
         outerRadius={130}           
       />
     </PieChart>
   </ResponsiveContainer>
 );
  
}

export default EventGenresChart;