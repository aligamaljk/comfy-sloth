import "./Shopping.scss"
import { IoClose } from "react-icons/io5"
import { useSelector, useDispatch } from "react-redux"
import { clearCart, removeFromCart } from "../../rtk/Slice/SliceCart"
import { useNavigate } from "react-router-dom"
const Shopping = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(cart);
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <>
      <div className="shopping">
        {cart.length === 0 ? (
          <div className="empty">
            <h2 className="title-empty" >your cart is empty</h2>
            <p className="text-empty">
              you have no items in your cart. start adding some
            </p>
            <button
              className="btn-show"
              onClick={() => {
                  navigate("/products");
              }}
            >
              shopping now
            </button>
          </div>
        ) : (
        <div className="container">
            <div className="header-shopping">
                <h3 className="title-shopping">Order summary</h3>
                <div className="total-price">
                <p className="title-total">total price : <span>${total?.toFixed(2)}</span></p>
          </div>
            </div>
        <div className="carts">
        {cart?.map((item) => {
            const { id, images = [], price, quantity, name, company, colors,title,image } = item;
            return (
              <div className="cart" key={id}>
                <div
                  className="close"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  <IoClose />
                </div>
                <div className="image">
                  {images[0] ? <img src={images[0].url} alt="" /> : <img src={image} alt={title} />}
                </div>
                <div className="info-cart">
                  <h3 className="title-cart">
                    title : <span>{name || title}</span>
                  </h3>
                  <p className="title-cart">
                    company : <span>{company}</span>
                  </p>
                  <p className="title-cart">
                    price : <span>${price?.toFixed(2)}</span>
                  </p>
                  <p className="title-cart">
                    quantity : <span>{quantity}</span>
                  </p>
                  <p className="color">
                    color :{' '}
                    <span style={{ backgroundColor: colors && colors[0] }}></span>
                  </p>
                  <p className="total-cart">
                    total : <span>${(price * quantity)?.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            );
          })}

        </div>
        <div className="btn">
          <button className="btn-clear" onClick={() => dispatch(clearCart())}>clear cart</button>
        </div>
        </div>
        )}
      </div>
    </>
  )
}

export default Shopping