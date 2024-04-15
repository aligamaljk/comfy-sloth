
const TOKEN = "token"
const CART_ITEM = "cart-Item"
export const SetToken = (token) => {
    localStorage.setItem(TOKEN, JSON.stringify(token))
}

export const GetToken = () => {
    return JSON.parse(localStorage.getItem(TOKEN))
}

export const RemoveToken = () => {
    localStorage.removeItem(TOKEN)
}

export const SetCart = (cart) => {
    localStorage.setItem(CART_ITEM, JSON.stringify(cart));
}

export const GetCart = () => {
    return JSON.parse(localStorage.getItem(CART_ITEM));
}

export const RemoveCart = () => {
    localStorage.removeItem(CART_ITEM);
}

