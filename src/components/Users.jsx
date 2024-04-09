import { Outlet } from "react-router-dom"


export const Users = () => {
  return (
    <div className=" flex flex-col justify-center items-center p-4">
        <h1 className=" text-4xl py-4">User 1</h1>
        <h1 className=" text-4xl py-4">User 2</h1>
        <h1 className=" text-4xl py-4">User 3</h1>

        <br />
        <br />
        <Outlet/>
    </div>
  )
}
