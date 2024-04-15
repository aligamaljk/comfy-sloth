import { NavLink, useParams } from "react-router-dom"
import "./SingleProduct.scss"
import axios from "axios"
import { useEffect, useState } from "react"
import { IoCheckmark } from "react-icons/io5";
import { Rating } from 'react-simple-star-rating'
import { useDispatch } from "react-redux"
import { addToCart, removeCart } from "../../rtk/Slice/SliceCart";


// const single_product_url = `https://course-api.com/react-store-single-product?id=`
const single_product_url = `https://www.course-api.com/react-store-single-product?id=`;
const SingleProduct = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [check, setCheck] = useState(0)
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)
    // console.log(check);
    const [indexSelect, setIndexSelect] = useState(0)
    // console.log(product, "product");
    // const {images, name, company, price, description,reviews,category,colors,stars,stock} = product || {}
    const { images = [], name, company, price, description, reviews, colors, stars, stock } = product || {};

    useEffect(() => {
        setLoading(true)
        const fetchSingleProduct = async () => {
            const response = await axios.get(single_product_url + id)
            const data = await response.data
            setLoading(false)
            setProduct(data)
        }
        fetchSingleProduct()
    }, [id])
    if(loading){
        return (
            <main className="page-loading">
                <div className="loading"></div>
            </main>
        )
    }
  return (
    <>
    <div className="single-product">
        <div className="header-about">
                <NavLink to="/" className="title-about" >
                    Home 
                </NavLink> 
                {" "}
                <h2 className="sup-title-about"
                  style={{padding: "0 5px"}}
                > / </h2>
                
                <NavLink to="/products" className="title-about" >
                    Products
                </NavLink>
                <h2 className="sup-title-about">/ {name} </h2>
        </div>
        <section className="section section-center page-details" >
        <NavLink to="/products" className="btn-show"
            style={{margin: "40px 10px"}}
        >
            Back to products
        </NavLink>
        <div className="details-section">
            <div className="section-images">
                <div className="image-active">
                    {images  ?
                    <img src={images[indexSelect]?.url } alt={name} />
                    : <span>loading...</span> }
                </div>
                <div className="gallery">
                    {images?.map((image, index) => {
                        return(
                            <div key={index}
                            className="img-single"
                                onClick={() => setIndexSelect(index)}
                            >
                                <img
                                className={index === indexSelect ? "active-img" : ""}
                                src={image?.url} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="section-content">
                <h2 className="title-details">{name}</h2>
                <div className="rating">
                    <Rating
                    // ratingValue={3.5}
                    initialValue={stars}
                    allowHover={false}
                    allowReset={false}
                    allowEmpty={false}
                    value={stars}
                    size={20}
                    transition={false}
                    allowHalfIcon={false}
                    readonly={false}
                    showTooltip={false}
                    onPointerEnter={false}
                    onPointerLeave={false}
                    onPointerMove={false}
                    onClick={false}
                    />
                    <span className="rating-count"> ({reviews} customer reviews)</span>
                </div>
                <h3 className="price">${price}</h3>
                <p className="description"> 
                    {description}
                </p>
                <p className="info"> 
                    <span className="title">Available :</span>
                    <span className="text">{stock === 0 ? 1 : stock}</span>
                </p>
                <p className="info"> 
                    <span className="title">Sku :</span>
                    <span className="text">{id}</span>
                </p>
                <p className="info"> 
                    <span className="title">Brand :</span>
                    <span className="text">{company}</span>
                </p>
                <hr />
                <section className="colors-container">
                    <div className="colors">
                    <span className="title-color"> colors : </span>
                        {colors?.map((color, index) => {
                            return(
                                <div className="color" key={index} 
                                onClick={() => setCheck(index)}
                                >
                                    <span style={{backgroundColor: color} } className="color-box" >
                                    <IoCheckmark 
                                    className={check === index ? "active-color " : "checkmark"} 
                                    />
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="btn-container">
                        <div className="amount-btns">
                            <button className="amount-btn"
                            disabled={count === 0}
                            onClick={() => {
                                setCount(count > 0 ? count - 1 : 1)
                                dispatch(removeCart(product))
                            }}
                            >-</button>
                            <span className="amount">{count > 0 ? count : 0}</span>
                            <button className="amount-btn"
                            disabled={count === (stock === 0 ? 1 : stock)}
                            onClick={() => {
                                setCount(count  > stock ? stock : count + 1)
                                if(count  !== (stock === 0 ? 1 : stock)){
                                    dispatch(addToCart(product,check)) 
                                }  else {
                                    return null
                                }
                            }}
                            >+</button>
                        </div>
                        <NavLink 
                        to="/cart" 
                        className="btn-show"
                        onClick={() => dispatch(addToCart(product,check))}
                        >
                            Add to cart
                        </NavLink>
                    </div>
                    {count === (stock === 0 ? 1 : stock)  && (
                        <p className="out-of-stock">Maximum number of items available</p>
                    )}
                </section>
            </div>
        </div>
        </section>
    </div>
    </>
  )
}

export default SingleProduct