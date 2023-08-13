"use client"
import { HeaderOne, SideBar } from "@/components";
import { useState } from "react";

export default function Home() {

  const [sidebarWidth, setSideBarWidth] = useState('250px')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleIsSidebarOpen = (value: boolean) => {
    setIsSidebarOpen(value)
    if(value){
      setSideBarWidth('250px')
    }else{
      setSideBarWidth('0px')
    }
  }

  return (
    <main className="w-screen h-screen flex">
      <SideBar sidebarWidth={sidebarWidth}/>
      <div className={`w-full`}>
        <HeaderOne isSidebarOpen={isSidebarOpen} handleIsSidebarOpen={handleIsSidebarOpen}/>
        <div className="p-10">
          body
        </div>
      </div>
    </main>
  )
}
