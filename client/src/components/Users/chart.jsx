"use client";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { User } from "react-feather";

import * as color from "../../utils/colors"

export function UserChartLegend({roleCount,colors}){
  return(
    <>

      <div className="mt-4 space-y-1">
        {roleCount.map((rc, index) => (
          <div key={rc.role} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"style={{ backgroundColor: colors[index % colors.length] }}
            ></div>
            <span>
              {rc.role}: {rc.total_users}
            </span>
          </div>
        ))}
      </div>

    </>

  )
}



export function Chart({chartData}) {
 const { count, roleCount } = chartData || {};
 
  const colors = [color.setRoleColor.adminColor,
                  color.setRoleColor.ownerColor,
                  color.setRoleColor.viewerColor];

  return (
    <div className="flex  items-center justify-center w-full h-full relative">

      <ul className="flex items-center justify-center absolute top-0 left-0 m-1">
        <svg className="svg_icons user-chart-icon flex items-center justify-center"><User size={16}/></svg>
          <p>User Roles</p>
      </ul>
      
      <ul className="flex items-center justify-center absolute rounded-full ">
          <p className="num_data ">{count?.total_users ?? 0}</p>
      </ul>

      <PieChart width={450} height={230}>
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="5" dy="10" stdDeviation="3" floodColor="rgba(0,0,0,0.1)" />
          </filter>
        </defs>

       <Pie
        data={roleCount}
        dataKey="total_users"
        nameKey="role"
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={82}
        label={({ role, total_users }) => `${role}: ${total_users}`}>
          
        {Array.isArray(roleCount) && roleCount.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[index % colors.length]}
            filter="url(#shadow)"
          />
        ))}


      </Pie>
      
        <Tooltip />
      </PieChart>
      
    </div>
  );

  
}
