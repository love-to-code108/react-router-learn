import { Link } from "react-router-dom"



export const Navbar = () => {
    return (
        <h1 className=" text-2xl ml-4 mt-2">
            {/* so to link anything we dont have to give the element in attributes but only just the path using the to attribute */}
            <Link className=" mr-4" to="/"> Home </Link>
            <Link to="/about"> About </Link>
        </h1>
    )
}
