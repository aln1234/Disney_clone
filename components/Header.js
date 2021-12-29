import Image from "next/image"
import {
    HomeIcon,
    SearchIcon,
    PlusIcon,
    StarIcon

} from "@heroicons/react/solid"

import {signIn, useSession,signOut, getSession} from "next-auth/react"
import { useRouter} from "next/router"


function Header() {
    const {data:session} = useSession();
    const router = useRouter();



    return (
        <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12  ">

            <Image src="/images/logo.svg" width={80} height={80}
            className="cursor-pointer"
            onClick = {() => router.push("/ ")}
            />
         
            {/* {
                session ? ( */}
                    <>
                       <div className="hidden ml-10 md:flex items-center space-x-6 mt-4">
                <a className="header-link group">
                    <HomeIcon className="h-4 "/>
                    <span className="span">Home</span>
                </a>
                <a className="header-link group">
                    <SearchIcon className="h-4 "/>
                    <span className="span">Search</span>
                </a>
                <a className="header-link group">
                    <PlusIcon className="h-4 "/>
                    <span className="span">WatchList</span>
                </a>
                <a className="header-link group">
                    <StarIcon className="h-4 "/>
                    <span className="span">Originals</span>
                </a>
                <a className="header-link group">
                    <Image src="/images/movie-icon.svg"
                    alt=""
                    width={25}
                    height={25}
                    className="h-5"
                    />
                    <span className="span">Movies</span>
                </a>
                <a className="header-link group">
                    <Image src="/images/series-icon.svg"
                    alt=""
                    width={25}
                    height={25}
                    className="h-5"
                    />
                    <span className="span">Series</span>
                </a>
              
            </div>
            <div className="relative ml-auto  ">
            <img  src="/images/pp.jpeg"
                    onClick={signOut}
                    alt="profile pic"
                    className="rounded-full w-10 h-10 "
                    />

            </div>
          
                    </>
                   

                {/* ):(
                    <button className="ml-auto uppercase border px-4 py-1.5 rounded
                    font-medium tracking-wide hover:bg-white hover:text-black
                    transition duration-200"
                    onClick={signIn}
                    >Login</button>

                )
            } */}
          
              
            
        </header>
    )
}

export default Header

