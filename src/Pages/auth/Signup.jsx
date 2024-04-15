import { Link, useNavigate } from "react-router-dom"
import "./Auth.scss"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { doCreateUserWithEmailAndPassword } from "../../Firebase/auth"
import { SetToken } from "../../LocalStorage/LocalStorage"
import { addUser } from "../../rtk/Slice/SliceUser"
// localStorage.clear()
const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCon, setPasswordCon] = useState("")
    const signup = async (e) => {
        e.preventDefault()
        if(password !== passwordCon){
          toast.error("Passwords Do Not Match")
        }else{
          doCreateUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              SetToken(user.accessToken);
              dispatch(addUser(user.uid));
              toast.success('Login Success');
              navigate('/');
            })
            .catch((error) => {
              const errorMessage = error.message;
              toast.error(errorMessage);
            });
        }
    }
  return (
    <>
       <div className="signup">
        <div className="cart-sign">
          <h1 className="title-sign" >Signup</h1>
          <form action="" className="form-sign" onSubmit={signup} >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required value={email} onChange={(e) => setEmail( e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value )} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password Confirmation</label>
              <input type="password" id="password" required value={passwordCon} onChange={(e) => setPasswordCon(e.target.value )} />
            </div>
            <button className="btn-signup" type="submit" >Signup</button>
            <p className="text-signup">Already have an account? <Link to="/login">Login</Link></p>
          </form>
        </div>
       </div>
    </>
  )
}

export default Signup