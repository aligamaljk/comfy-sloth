import { Link } from "react-router-dom"
import "./Auth.scss"
const ForgetPassword = () => {
  return (
<div className="forget-password">
        <div className="cart-sign">
          <h1 className="title-sign" >Forget Password</h1>
          <form action="" className="form-sign" >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <button className="btn-signup">Reset Password</button>
            <div className="text-group">
            <p className="text-signup">Already have an account? <Link to="/login">Login</Link></p>
            <p className="text-signup"> Don't have an account? <Link to="/signup">Signup</Link></p>
            </div>
          </form>
        </div>
      </div>
  )
}

export default ForgetPassword