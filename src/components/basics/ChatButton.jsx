import React from 'react'
import { Button } from "@/components/ui/button";
import { RiRobot2Line } from "react-icons/ri";
export const ChatButton = ({showChat}) => {
  return (
    <Button onClick={showChat} variant="Chat" className="rounded-full h-fit w-fit p-2 text-4xl fixed bottom-5 left-5"><RiRobot2Line /></Button>
  )
}
