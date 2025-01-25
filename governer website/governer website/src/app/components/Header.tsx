import Image from "next/image";
import GovernorLogo from"/public/GovernorLogo.png"
import Link from "next/link";

export default  function Header(){
    return(
        
        <div className="(Main NavBAr) flex bg-[#1c509a] justify-around items-center sticky top-0 z-50">

            <div className="(Logo) w-16">
                <Image src={GovernorLogo} alt=""/>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-[#b9d8f3]">
                    Tuition Free Education Program on Latest Technologies</h1>
            </div>

            <div>
                <ul className="flex gap-10 font-bold text-[#faf6f6]">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/apply">Apply</Link></li>
                    <li><Link href="/jobs">Jobs</Link></li>
                    <li><Link href="/result">Result</Link></li>
                    <li><Link href="/">Courses</Link></li>
                </ul>
            </div>

        </div>
    )
}