import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}


interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
   
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.loading = false;
    },
    
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});


export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } = usersSlice.actions;


export default usersSlice.reducer;
