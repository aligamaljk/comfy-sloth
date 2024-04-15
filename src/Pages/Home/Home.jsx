import img1 from "../../assets/hero-bcg.a876f19f6786a3aca992 (1).jpeg"
import img2 from "../../assets/hero-bcg-2.789918645915c8acb36f.jpeg"
import "./Home.scss"
import { NavLink } from "react-router-dom"
import { TbSearch } from "react-icons/tb";
import { GiNewspaper } from "react-icons/gi";
import { useEffect, useState } from "react"
// const products_url = "https://course-api.com/react-store-products"
const products_url = 'https://www.course-api.com/react-store-products';
import axios from "axios"
const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(products);
    useEffect(() => {
        setLoading(true)
        const fetchProducts = async () => {
            const response = await axios.get(products_url)
            const data = await response.data.slice(7, 10)
            setLoading(false)
            setProducts(data)
        }
        fetchProducts()
    }, [])
    // if(loading){
    //     return (
    //         <main className="page-loading">
    //             <div className="loading"></div>
    //         </main>
    //     )
    // }
  return (
    <div className="home">
      <section className="section-content container">
        <div className="info-home">
          <h3 className="title-info-home">
            Design Your <br /> Comfort Zone
          </h3>
          <p className="text-info-home">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <NavLink to="/products" className="btn-show">
            Show Now
          </NavLink>
        </div>
        <div className="img-container">
          <img src={img1} className="img-one" alt="" />
          <img src={img2} className="img-two" alt="" />
        </div>
      </section>
      <section className="section section-featured  bg-two">
        <h1 className="title-section">Featured Products</h1>
        {loading ? (
          <div 
            style={{display:"flex",justifyContent:"center",alignItems:"center",height:"200px"}}
          >
            <div className="loading"></div>
          </div>
        ) : (
          <div className="section-center featured">
            {products.map((product) => {
              const { id, image, name } = product;
              return (
                <article key={id}>
                  <div className="img-container">
                    <img src={image} alt={name} />
                    <NavLink to={`/products/${id}`} className="icon-search">
                      <TbSearch />
                    </NavLink>
                  </div>
                </article>
              );
            })}
          </div>
        )}
        <div className="btn-featured">
          <NavLink to="/products" className="btn-show">
            Show Now
          </NavLink>
        </div>
      </section>
      <section className="section section-about bg-three">
        <div className="header-about-info">
          <h3 className="title-header-about-info">
            Custom Furniture Built Only For You
          </h3>
          <p className="text-header-about-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className="container">
          <div className="cards-about">
            <div className="card">
              <div className="icon">
                {' '}
                <GiNewspaper />{' '}
              </div>
              <div className="title-card">Vision</div>
              <div className="text-card">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </div>
            </div>
            <div className="card">
              <div className="icon">
                {' '}
                <GiNewspaper />{' '}
              </div>
              <div className="title-card">Mission</div>
              <div className="text-card">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </div>
            </div>
            <div className="card">
              <div className="icon">
                {' '}
                <GiNewspaper />{' '}
              </div>
              <div className="title-card">History</div>
              <div className="text-card">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-join">
        <div className="container">
          <div className="info-join">
            <h3 className="title-info-join">
              Join our newsletter and get 20% off
            </h3>
            <p className="text-info-join">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sint unde quaerat ratione soluta veniam provident adipisci cumque
              eveniet tempore?
            </p>
          </div>
          <form
            action="https://formspree.io/f/xnqyjvle"
            method="POST"
            encType="multipart/form-data"
            target="_blank"
            rel="noopener noreferrer"
            onSubmit={(e) => e.preventDefault()}
            name="myForm"
            className="form-join"
          >
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              className="input-join"
            />
            <button
              type="submit"
              className="btn-join"
              onClick={() => {
                // document.querySelector(".input-join").value = "";
              }}
            >
              subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home