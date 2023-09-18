import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './features/counter/counterSlice'

export default configureStore({
  initialState: {
    counter: {
      value: 0
    }
  },
  reducer: {
    counter: counterReducer
  }
});