"use client"
import React from 'react'
import DataTable from '../Dashboard-Components/Table';
import { appointmentsData } from '@/lib/utils'; 
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/Components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"

import { ArrowUpDown, MoreHorizontal } from 'lucide-react';





const Appointment = () => {


    const columns:ColumnDef<Appointment>[]=[
      {
        accessorKey: "patient",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
      },
        {header:"Gender",accessorKey:"gender"},
        {header:"Date",accessorKey:"date"},
        {header:"Time",accessorKey:"time"},
        {
          id: "actions",
          header:"Actions",
          cell: ({  }) => {
            // const appointment = row.original
          
            return (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Accept Appointment</DropdownMenuItem>
                  <DropdownMenuItem>Reject Appointment</DropdownMenuItem>
                  <DropdownMenuItem>View Patient</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )
          },
        },

    ]
  return (
    <div className='w-[98%] h-fit bg-white rounded-md shadow-md shadow-black p-2'>
        <p className='text-xl py-4 font-bold'>Appointments</p>
        <DataTable columns={columns} data={appointmentsData}/>
    </div>
  )
}

export default Appointment