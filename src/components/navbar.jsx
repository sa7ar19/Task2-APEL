import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        
<header className=" bg-muted border-b py-4">
    <div className="container flex justify-between items-center gap-2">
    <Link to='/'>
      <h1>Logo</h1>
    </Link>
      <nav>
        <ul className=" flex justify-end items-center gap-2">
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
          <Link to='/cart'>
              Cart
              </Link>
          </li>
        </ul>
      </nav>
    </div>
   </header>
    )
}