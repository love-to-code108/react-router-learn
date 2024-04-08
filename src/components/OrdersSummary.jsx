import { useNavigate } from "react-router-dom"


export const OrdersSummary = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }




  return (
    <div>
        <h1 className=' text-3xl'>Order Confirmed</h1>
        <button onClick={goBack}> Go Back </button>
    </div>
  )
}
