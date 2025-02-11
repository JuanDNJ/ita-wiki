import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: {
      auth: JSON.parse(localStorage.getItem("auth") as string)
    }
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("auth")
      state.user.auth = JSON.parse(localStorage.getItem("auth") as string);
    }
  }
})

export const { logout } = userSlice.actions

export default userSlice.reducer

