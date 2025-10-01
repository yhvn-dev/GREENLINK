"use client";
import * as userService from "../../data/userService";

import { useEffect, useState } from "react";
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



export function Chart() {
  const [count, setCount] = useState([]);
  const [roleCount, setRoleCount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userCount, userCountByRole] = await Promise.all([
          userService.getUsersCount(),
          userService.getUsersCountByRole(),
        ]);

        setCount(userCount);
        setRoleCount(
          userCountByRole.map(rc => ({...rc,total_users: Number(rc.total_users)}))
        );

        console.log("Total User Count:", userCount);
        console.log("Total Count Based On Role:", userCountByRole);
      } catch (err) {
        console.error("Error Fetching user Data", err);
      }
    };

    fetchData();
  }, []);

  const ownerColor = color.colors.dangerB
  const adminColor = color.colors.warning
  const viewerColor = color.colors.accDarkc
  const colors = [ownerColor,adminColor,viewerColor];

  return (
    <div className="flex  items-center justify-center w-full h-full relative">

      <ul className="flex items-center justify-center absolute top-0 left-0 m-1">
        <svg className="svg_icons user-chart-icon flex items-center justify-center"><User size={16}/></svg>
          <p>User Roles</p>
      </ul>
      
      <ul className="flex items-center justify-center absolute rounded-full "s>
          <p className="num_data ">{count.total_users}</p>
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
          innerRadius={50}
          outerRadius={80}
          label={({ name, value }) => `${name}: ${value}`}>
          {roleCount.map((entry, index) => (
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
