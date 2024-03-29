import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartDate } from "./store/cart-action";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchCartData())
  },[dispatch])
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartDate(cart));
    }
    
  }, [cart, dispatch]);
  return (
    <Layout>
      {showCart && <Cart />}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Products />
    </Layout>
  );
}

export default App;
