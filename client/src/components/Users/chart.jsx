"use client";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Label } from "recharts";
import * as userService from "../../data/userService";

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
        

        setCount(Array.isArray(userCount) ? userCount: 
        [{ label: "Users", total_users: userCount.total_users}]);
        setRoleCount(Array.isArray(userCountByRole) ? userCountByRole: 
        Object.entries(userCountByRole).map(([role, count]) => ({role, count,})));

        console.log("Total User Count:",userCount)
        console.log("Total Count Based On Role:",userCountByRole)

      } catch (err) {
        console.error("Error Fetching user Data", err);
      }
    };

    fetchData();
  }, []);

 
    const COLORS = ["hsl(355, 100%, 70%)","hsl(35, 80%, 70%)","hsl(180, 2%, 43%)"]

    /* SIGNS */           
    return (
    <div className="flex items-center justify-center w-full h-full ">
        
        <PieChart width={340} height={230}>
            <Pie
                data={roleCount}             // use API data
                dataKey="count" 
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                fill="#2dc653"
                labelLine={true}   
                label={({ index }) => `${roleCount[index].role}: ${roleCount.total_users}`}>
                
                {roleCount.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>))}
                
            </Pie>
           <Tooltip/>
        </PieChart>

    </div>


  );
}
