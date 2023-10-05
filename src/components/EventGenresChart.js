import React, { PureComponent } from 'react';
import { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


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
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
  const colors = ["#E1DBC3", "#B6D4E1", "#6699ff", "#88BCBD", "#848484"];

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

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
      const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
          <text class="pie-text"
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
    
      return (
   <ResponsiveContainer width="99%" height={400}>
     <PieChart>
       <Pie
         data={data}
         dataKey="value"
         labelLine={false}
         label={renderCustomizedLabel}
         outerRadius={130}           
       >
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          </Pie>
     </PieChart>
   </ResponsiveContainer>
 );
  
}

export default EventGenresChart;