import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function UserAvatar({name,image,className}:{name?:string,image?:string,className?:string}) {
  return (
      <Avatar className={cn("bg-white text-black", className)}>
          {image && (
              <Image src={image}
                  alt=""
                  width={40 }
                  height={ 40}
              className="rounded-full"/>
          )}
      {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
