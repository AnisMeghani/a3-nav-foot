import Link from "next/link";

export default function Navbar(){
    return(
        <footer>
        <div className="bg-green-400 w-full h-10 font-bold">
        <h1>My Home page</h1>
        </div>
        <div>
            <Link href="/electronics"className="bg-blue-800 text-sky-200">Electronics</Link>
        </div>
        </footer>
    )
}