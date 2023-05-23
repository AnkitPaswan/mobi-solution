import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
export const Context = createContext();


const Appcontext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  useEffect(() => {
    // localStorage.setItem('cartItem', JSON.stringify(cartItems));
    // const cart = localStorage.getItem('cart');
    // if (cart) {
    //   setCartItems(JSON.parse(cart));
    // }

    let count = 0;
    cartItems.map(item => count += item.attributes.quantity);
    setCartCount(count);

    let subTotal = 0;
    cartItems.map(item => subTotal += item.attributes.price * item.attributes.quantity);
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
    toast.success("added a new product to cart", {
      theme: "colored",
      hideProgressBar: true,
      position: "top-center"
    });
  };
  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
    toast.success("removed a product to cart", {
      theme: "colored",
      hideProgressBar: true,
      position: "top-center"
    });
  };
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === 'inc') {
      items[index].attributes.quantity += 1;
    } else if (type === 'dec') {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Appcontext;
