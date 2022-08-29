import { addEventStart, addEventSuccess, addEventFailure } from "./eventSlice";
import axios from 'axios'




// export const deleteProduct = async (id, dispatch) => {
//   dispatch(deleteProductStart());
//   try {
//     // const res = await userRequest.delete(`/products/${id}`);
//     dispatch(deleteProductSuccess(id));
//   } catch (err) {
//     dispatch(deleteProductFailure());
//   }
// };

// export const updateProduct = async (id, product, dispatch) => {
//   dispatch(updateProductStart());
//   try {
//     // update
//     dispatch(updateProductSuccess({ id, product }));
//   } catch (err) {
//     dispatch(updateProductFailure());
//   }
// };
export const addEvents = async (events, dispatch) => {
  dispatch(addEventStart());
  try {
    const res = await axios.post(`http://localhost:8800/api/events`, events);
    dispatch(addEventSuccess(res.data));
  } catch (err) {
    dispatch(addEventFailure());
  }
};