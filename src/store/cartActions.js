import { uiActions } from './uiSlice';
import { cartActions } from './cartSlice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('insert firabase url');
      if (!response.ok) {
        throw new Error('Could not fetch cart data.');
      }
      const data = await response.json();

      return data;
    };
    try {
      const cartData = await sendRequest();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Could not get cart data.',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data.',
      })
    );
    const sendRequest = async () => {
      const response = await fetch('insert firabase url', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Cart data sent.',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed.',
        })
      );
    }
  };
};
