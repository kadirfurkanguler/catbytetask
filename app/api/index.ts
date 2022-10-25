import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { API_URL, API_KEY } from '@env';

const api = axios.create({
  baseURL: 'https://dummyjson.com/',
});

const getUsers = createAsyncThunk('users/users', async () => {
  const res = await api.get('users');
  console.log('res', res);
  return res.data;
});


export { getUsers };
