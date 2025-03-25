import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import {sortBy, uniqBy} from "lodash";


export default function Chart({ width,results}) {
    {console.log("hello")}
    {console.log(results)}
    const lowestRank=sortBy(results,'rank').reverse()?.[0].rank;
    const highestRank=sortBy(results,'rank')?.[0]?.rank;
    const domainLow=lowestRank+3;
    let data=results;
    data=data.map(result=>({date:result.createdAt.substring(0,10),rank:result.rank,points:domainLow-result?.rank||null,}));
    data=uniqBy(data,'date');
    data=sortBy(data,'date');

    return (
      <div className="">
        <ResponsiveContainer width={width} height={80}>
          <AreaChart data={data} width={width}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis hide={true} domain={[0,lowestRank]}/>
            <Tooltip 
                labelFormatter={(value,name)=>name?.[0]?.payload?.date.substring(0,10)}
                formatter={(value,name,props)=>['rank: '+props?.payload?.rank]} 
            />
            <Area type="monotone" dataKey="points" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
