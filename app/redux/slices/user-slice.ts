import {createSlice} from '@reduxjs/toolkit';
import {getUsers} from '../../api';
interface Company {
  address: Address;
}
interface Address {
  address: string;
  state: string;
  postal_code: string;
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  company: Company;
  city: string;
  image: string;
}
export const userInfo = createSlice({
  name: 'userInfo',
  initialState: {
    isLoading: {},
    users: [] as User[],
    error: {},
  },
  reducers: {
    addUser: (state, action) => {
      console.log('addUser', action);
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      console.log('addUser', action);
      state.users.find((user, index) => {
        if (user?.id === action.payload.id) {
          state.users.splice(index, 1);
        }
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(getUsers.pending, state => {
      state.isLoading = {...state.isLoading, authLogin: true};
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, authLogin: false};
      state.users = action.payload?.users;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, authLogin: false};
      state.error = {...state.error, authLogin: action.error || action.payload};
    });
  },
});
export default userInfo.reducer;
export const {addUser, deleteUser} = userInfo.actions;
