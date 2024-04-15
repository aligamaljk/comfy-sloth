import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import "./Products.scss"
import { TbSearch } from "react-icons/tb";
import {useDispatch, useSelector} from 'react-redux'
import { fetchProducts } from "../../rtk/Slice/SliceProducts";
import { IoIosCheckmark } from "react-icons/io";

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products) 
    const [price, setPrice] = useState(0)
    const [check, setCheck] = useState(0)
    const [checked, setChecked] = useState(false)
    const [checkColor, setCheckColor] = useState(0)
    // const [ items, setItems] = useState([])
    const [styleCard, setStyleCard] = useState(JSON.parse(localStorage.getItem("styleCard")))
    // const [loading, setLoading] = useState(true)
    console.log(products);
    useEffect(() => {
        localStorage.setItem("styleCard", styleCard)
        setPrice(maxPrice)
    }, [styleCard])
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    if(products === "pending"){
        return (
            <main className="page-loading">
                <div className="loading"></div>
            </main>
        )
    }
    // const categories = products?.map((item) => item.category).filter((item, index ) => products?.map((item) => item.category).indexOf(item) === index);
    
    const categories = (products || []).map((item) => item.category)
  .filter((category, index, self) => self.indexOf(category) === index );
  const company = (products || []).map((item) => item.company).filter((company, index, self) => self.indexOf(company) === index);
const colors = (products || []).map((item) => item.colors).flat().filter((color, index, self) => self.indexOf(color) === index);
//   console.log(colors);
  const maxPrice = Math.max(...(products || []).map((item) => item.price));
  const minPrice = Math.min(...(products || []).map((item) => item.price));

  return (
    <>
        <div className="products">
            <div className="header-about">
                <NavLink to="/" className="title-about" >
                    Home
                </NavLink>
                <h2 className="sup-title-about">/ Products</h2>
            </div>
            <div className="products-container">
                <div className="products-content">
                    <form action="" className="side-bar" >
                        <input type="text" placeholder="search" className="input-form" />
                        <div className="form-control">
                            <h5 className="title-form">Categories</h5>
                            <div className="check">
                                <p 
                                onClick={() => setCheck(0)} 
                                className="categories" 
                                style={check === 0 ? {borderBottom: "1px solid #617d98"} : null}>all</p>
                                {categories.map((item, index) => (
                                    <p key={index} 
                                    onClick={() => setCheck(index + 1)}
                                    style={check === index + 1 ? {borderBottom: "1px solid #617d98"} : null}
                                    className="categories">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="form-control">
                            <h5 className="title-form"> company </h5>
                            <select name="company" id="company" className="select-form-company">
                                <option value="all"  >all</option>
                                {company.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control">
                            <h5 className="title-form"> colors </h5>
                            <div className="check-color">
                                <p className="btn-all"
                                onClick={() => setCheckColor(0)}
                                style={checkColor === 0 ? {borderBottom: "1px solid #617d98",opacity: "1"} : null}
                                >all</p>
                                {colors.map((item, index) => (
                                    <p key={index} 
                                    onClick={() => setCheckColor(index + 1)}
                                    style={checkColor === index + 1 ? 
                                    {
                                        opacity: "1",
                                        backgroundColor: item
                                } : {backgroundColor: item}}
                                    className="btn-color" 
                                    >
                                        {checkColor === index + 1 ? <IoIosCheckmark 
                                         style={{color: "#fff", fontSize: "1rem"}}
                                        /> : null}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="form-control">
                            <h5 className="title-form"> price </h5>
                            <div className="check">
                                <p className="price">${price === "-Infinity" ? maxPrice : price }</p>
                                <input type="range" min={minPrice} max={maxPrice} name="price"
                                className="slider"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-control-checkbox">
                            <label htmlFor="free" className="label-checkbox" > free shipping</label>
                            <input type="checkbox" id="free" className="checkbox"
                             checked={checked}
                             onChange={(e) => setChecked(e.target.checked)}
                            />
                        </div>
                        <button className="btn-clear"
                        onClick={(e) => {
                            e.preventDefault()
                            setCheck(0)
                            setCheckColor(0)
                            setPrice(maxPrice)
                            setChecked(false)
                        }}
                        >clear filters</button>
                    </form>
                    <div className="product">
                        <div className="header-product">
                            <div className="icon-style">
                                <div className={styleCard ? "icon active-icon" : "icon"} onClick={() => setStyleCard(true)} >
                                    <HiMiniSquares2X2/>
                                </div>
                                <div className={styleCard ? "icon" : "icon active-icon"} onClick={() => setStyleCard(false)} >
                                    <HiMiniSquaresPlus/>
                                </div>
                            </div>
                            <div className="product-count">{products.length} Products Found</div>
                            <span></span>
                            <div className="sort-by">Sort By: {""} 
                            <select name="" className="select">
                                <option value="1">price - low</option>
                                <option value="2">price - high</option>
                                <option value="3">name - [a - z]</option>
                                <option value="4">name - [z - a]</option>
                            </select> </div>
                        </div>
                            {styleCard ?(
                                <div className="cards-products">
                                {products?.map((item) => {
                                    const {id,
                                        image,
                                        company,
                                        name,
                                        price,shipping,description,colors,category} = item || {}
                                    return(
                                    <div className="card-product" key={id} >
                                        <div className="img-product">
                                            <img src={image} alt={name} />
                                            <NavLink to={`/products/${id}`} className="icon-search">
                                                <TbSearch />
                                            </NavLink>
                                        </div>
                                        <div className="info">
                                            <div className="title-product">
                                                {name}
                                            </div>
                                            <div className="price">
                                                ${price}
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                                </div>
                            ) : (
                                <div className="cards-products-style">
                                {products?.map((item) => {
                                const {id,
                                    image,
                                    company,
                                    name,
                                    price,shipping,description,colors,category} = item || {}
                                    return (
                                    <div className="card-product-style" key={id} >
                                        <div className="img-product-style">
                                            <img src={image} alt={name} />
                                        </div>
                                        <div className="info">
                                            <div className="title-product">
                                                {name}
                                            </div>
                                            <div className="price">
                                                ${price}
                                            </div>
                                            <div className="description">
                                                {description}
                                            </div>
                                            <NavLink to={`/products/${id}`} className="btn-show">
                                                Details
                                            </NavLink>
                                        </div>
                                    </div>
                                    )
                                })}
                                </div>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
    </>
  )
}

export default Products