import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Layout = () => {
    const styleContent = {
        margin: "71px 0 50px",
    }
  return (
    <>
       <div className="layout">
         <Header/>
         <div style={styleContent}>
            <Outlet/>
         </div>
         <Footer/>
       </div>
    </>
  )
}

export default Layout