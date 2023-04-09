import Link from "next/link";

export default function NavBar() {
  return (

    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl"> HungryTable </Link>
      <div>
        <div className="flex">
          <Link href="/user/signUp">
            <button
              className="bg-blue-400 text-white border p-1 px-4 rounded mr-3" value="">
              Log in
            </button>
          </Link>
          <Link href="/user/login">
            <button className="border p-1 px-4 rounded">Sign up</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}