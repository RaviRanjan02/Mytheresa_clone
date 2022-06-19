import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "./context/Authcontext"

const PrivateRoute=({children})=>{
    const {isAuth}=useContext(AuthContext)

    if(!isAuth){
      return  <Navigate to={"/signin"} replace={false}/>
    }
    return children
}
export default PrivateRoute