import {configureStore, combineReducers} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import userSlice from './slices/user-slice';
// Combine all reducers
const reducer = combineReducers({
  users: userSlice,
});

// Set combined reducer
const store = configureStore({
  reducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
