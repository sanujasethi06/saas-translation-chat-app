"use client"

import React from 'react'
import { Button } from './ui/button'
import { MessageSquarePlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const CreateChatButton = () => {
    const router = useRouter();
    const createNewChat = async () => {
            router.push(`/chat/abc`)
    }
  return (
    <div>
          <Button onClick={createNewChat} variant={"ghost"}>
              <MessageSquarePlusIcon/>
      </Button>
    </div>
  )
}

export default CreateChatButton
