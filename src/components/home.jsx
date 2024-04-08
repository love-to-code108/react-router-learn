import { useNavigate } from "react-router-dom"



export const Home = () => {

  const navigate = useNavigate();

  const navigatingToOrdersSummary = () => {
    return navigate('order-summary');
  }



  return (
    <div>
      <h1 className=" text-3xl text-center">
        home
      </h1>

      <button onClick={navigatingToOrdersSummary}>Please Order</button>
    </div>
  )
}
