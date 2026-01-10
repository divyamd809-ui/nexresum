import Link from "next/link";

export default function Navbar() {

    const nav = [
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "About",
            "path": "/"
        },
        {
            "name": "Pricing",
            "path": "/"
        },
         {
            "name": "Sales",
            "path": "/"
        },
         {
            "name": "Contact",
            "path": "/"
        },
        {
            "name":"mock interview"
            "path":"/"
        },
    ]


    return (
        <header className="fixed right-0 -translate-x-1/2 top-4">
            <nav className="flex gap-20 items-center justify-center">
                <ul className="flex gap-6 text-lg">
                  {nav.map((items, idx) => (
                    <Link href={items.path} key={idx}>
                        <li className={`${items.name === "Home" ? "text-amber-700" : "hover:text-amber-700 duration-200"}`}>
                            {items.name}
                        </li>
                    </Link>
                  ))}
                </ul>
                {/* <button className="text-lg px-6 py-1 bg-amber-900 rounded-sm">
                    SignUp
                </button> */}
            </nav>
        </header>
    )
}