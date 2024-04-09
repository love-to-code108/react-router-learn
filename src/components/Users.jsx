import { Outlet , useSearchParams } from "react-router-dom"


export const Users = () => {

  const [searchParams , setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === `active`;

  return (
    <div className=" flex flex-col justify-center items-center p-4">
        <h1 className=" text-4xl py-4">User 1</h1>
        <h1 className=" text-4xl py-4">User 2</h1>
        <h1 className=" text-4xl py-4">User 3</h1>

        <br />
        <br />
        <Outlet/>


        <div className=" text-2xl ">
          <button className=" border-2 bg-slate-300 mx-4 px-2" onClick={() => setSearchParams({filter:`active`})}>Active Users</button>
          <button className=" border-2 bg-slate-300 mx-4 px-2" onClick={() => setSearchParams({})}>Reset Filter</button>
        </div>

        {
          showActiveUsers ? <h2> Showing active users</h2> : <h2>Showing all users</h2>
        }
    </div>
  )
}
