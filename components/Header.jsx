import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="bg-bg w-screen h-[8%] min-h-nav flex justify-center py-2">
        <div className="navcont bg-nav h-full w-[90%] rounded-3xl cursor-pointer shadow-2xl grid grid-flow-col grid-col-3 items-center gap-3 px-14" style={{borderRadius:"30px"}}>
            <div className="col-span-1  flex items-center min-w-logo h-full w-[8%]  justify-center">
                <img src="/logo.png" alt="" className="h-15 w-15" />
            </div>
            <div className="navlinks max-w-logo col-span-6 grid grid-flow-col text-white text-lg font-semibold ">
                <span><Link href="#">Pricing</Link></span>
                <span><Link href="#">Support</Link></span>
                <span><Link href="#">About Us</Link></span>
                <span><Link href="#">Resources</Link></span>
            </div>
            <div className="col-span-1 flex flex-row item-center justify-between" >
                <span className="navlinks text-white text-lg font-semibold pt-2"><Link href="#">Login</Link></span>
                <button className="text-white navlinks text-lg h-min font-semibold bg-button rounded-2xl px-4 py-2">Try For Free</button>
            </div>
        </div>
    </div>
  )
}

export default Header