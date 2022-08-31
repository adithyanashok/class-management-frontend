import { addEventStart, addEventSuccess, addEventFailure } from "./eventSlice";
import { addNoteStart, addNoteSuccess, addNoteFailure } from "./noteSlice";

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
    console.log(res.data)
    dispatch(addEventSuccess(res.data));
  } catch (err) {
    console.log(err)
    dispatch(addEventFailure());
  }
};
export const addNotes = async (notes, dispatch) => {
  dispatch(addNoteStart());
  try {
    const res = await axios.post(`http://localhost:8800/api/notes`, notes);
    dispatch(addNoteSuccess(res.data));
  } catch (err) {
    dispatch(addNoteFailure());
  }
};