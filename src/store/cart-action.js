import { cartAction } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async(dispatch)=> {
    try{
      const response = await fetch(
        "https://react-http-f88b3-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await response.json()
      dispatch(cartAction.replaceCart({
        totalQuantity : data.totalQuantity,
        items : data.items||[]
      }))
    }catch(error){
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.messge,
        })
      );
    }
  }
}



export const sendCartDate = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart data!",
      })
    );
    try {
      await fetch(
        "https://react-http-f88b3-default-rtdb.firebaseio.com/cart.json",
        {
          method: "put",
          body: JSON.stringify({items : cart.items, totalQuantity : cart.totalQuantity}),
        }
      );
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending Cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.messge,
        })
      );
    }
  };
};
