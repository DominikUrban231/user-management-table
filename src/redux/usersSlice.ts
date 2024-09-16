// redux/usersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UsersState {
  users: User[];
  filteredUsers: User[];
  status: 'idle' | 'loading' | 'failed';
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  status: 'idle',
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredUsers = state.users.filter(user =>
        Object.keys(state.filters).every(key =>
          user[key as keyof User].toString().toLowerCase().includes(state.filters[key as keyof typeof state.filters].toLowerCase())
        )
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setFilters } = usersSlice.actions;
export default usersSlice.reducer;
