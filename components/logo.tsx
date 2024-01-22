import Link from "next/link"
import { AspectRatio } from "./ui/aspect-ratio"
import Image from "next/image"


const Logo = () => {
  return (
      <Link href="/">
          <div className="flex items-center w-72 h=14">
              <AspectRatio ratio={16 / 9}className="flex items-center justify-center">
                <h1 className="text-xl font-bold">MultiVerseChat</h1>
                  {/* <Image priority
                      src={Logoimage}
                      alt="logo"
                  className="dark:filter dark:invert"/> */}
              </AspectRatio>
              
                </div>
      </Link>
  )
}

export default Logo
