import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="">
        <h1>404 Not Found</h1>
        <Link to="/home">Back to Home</Link>
    </div>
  )
}

export default NotFound