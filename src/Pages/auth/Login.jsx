import { Link, useNavigate } from "react-router-dom"
import "./Auth.scss"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../Firebase/auth"
import { SetToken } from "../../LocalStorage/LocalStorage"
import { addUser } from "../../rtk/Slice/SliceUser"
import { toast } from "react-toastify"
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const signIn = async (e) =>{
    e.preventDefault()
    doSignInWithEmailAndPassword(email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      SetToken(user.accessToken)
      dispatch(addUser(user.uid));
      toast.success("Login Success")
      navigate("/")
    }).catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage)
    })
  }
  const signInWithGoogle = () => {
    doSignInWithGoogle().then((result) => {
      const user = result.user;
      SetToken(user.accessToken)
      dispatch(addUser(user.displayName));
      toast.success(`Welcome ${user.displayName}`)
      navigate("/")
    }).catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage)
    })
  }
  return (
      <div className="login">
        <div className="cart-sign">
          <h1 className="title-sign" >Login</h1>
          <form action="" className="form-sign" onSubmit={signIn} >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value )} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" required value={password} id="password" onChange={(e) => setPassword( e.target.value)} />
            </div>
            <button className="btn-signup" type="submit"
            >Login</button>
            <button className="btn-signup"
              onClick={signInWithGoogle}
            >Sign In With Google</button>
            <div className="text-group">
            <p className="text-signup"> Dont have an account? <Link to="/signup">Signup</Link></p>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Login