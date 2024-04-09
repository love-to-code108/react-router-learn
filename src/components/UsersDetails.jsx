import { useParams } from "react-router-dom"


export const UsersDetails = () => {

  const params = useParams();
  const userId = params.userId;

  return (
    <div>
        <h1>Details about user : {userId}</h1>
    </div>
  )
}
