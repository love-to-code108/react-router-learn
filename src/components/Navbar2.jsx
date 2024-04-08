import { NavLink, useNavigate } from "react-router-dom"



export const Navbar2 = () => {


    const navLinkStyles = ({ isActive }) => {



        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }


    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }


    const exit = () => {
        navigate('/',{replace : true});
    }


    return (
        <h1 className=" text-2xl ml-4 mt-2">
            {/* so to link anything we dont have to give the element in attributes but only just the path using the to attribute */}
            <NavLink style={navLinkStyles} className=" mr-4 p-2" to="/"> Home </NavLink>
            <NavLink style={navLinkStyles} className=" p-2" to="/about"> About </NavLink>

            <button onClick={goBack} className=" mr-4"> Go Back </button>
            <button onClick={exit}> Exit  </button>
        </h1>
    )
}
