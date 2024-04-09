import { Link } from "react-router-dom"

export const Products = () => {
  return (
    <div>
        <input className=" text-2xl mx-8 my-4 p-1 px-2" type="search" placeholder="Search Products" />

        <div className=" text-2xl font-bold text-blue-600 bg-slate-200"> 
            <Link className=" mx-8 " to="featured">Featured Products</Link>
            <Link className=" mx-8 " to="newProducts">New Products</Link>

        </div>
    </div>
  )
}
