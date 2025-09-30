import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
"use client"
import * as React from "react"
import { PieChart, Pie, Label } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"




import { useEffect,useState } from 'react';
import * as userService from "../../data/userService"


export function Chart() {
  const [count,setCount] = useState([])
  const [roleCount,setRoleCount] = useState([])

   useEffect(() =>{
    const fetchData = async () =>{
        try{
            const [userCount,userCountByRole] = await Promise.all([
                userService.getUsersCount(),
                userService.getUsersCountByRole(),
            ])

            setCount(userCount)
            setRoleCount(userCountByRole)

            // log data
            console.log(userCount)
            console.log(userCountByRole)
            
        }catch(err){
            console.error("Error Fetching user Data",err)
        }
    }
      fetchData();
    },[]) 



  return (
    <div> 

        <>
        
        </>

    </div>
  )
}


