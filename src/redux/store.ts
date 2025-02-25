// import userReducer from "./userSlice"; // Adjust the path as necessary
// import noteReducer from "./noteSlice";
// import renderedcomponentSlice from "./renderedcomponentSlice";
// import recordingReducer from "./recordingSlice";

import { configureStore } from "@reduxjs/toolkit";
import renderedcomponentSlice from "./renderedcomponentSlice";

const rootReducer = {
  //   user: userReducer,
  //   notes: noteReducer,
  //   recording:recordingReducer,
  renderedComponent: renderedcomponentSlice, // Updated key
};

const store: any = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false, // Disable immutable state invariant middleware
      serializableCheck: true, // Keep this to catch non-serializable values
    }),
});

export default store;

export type AppDispatch = typeof store.dispatch;
