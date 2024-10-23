import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../hooks/local";



export const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    posts: getFromLocal()
  },
  reducers: {

    addPost: (state, action) => {
      state.posts.push(action.payload);
      setToLocal(state.posts);
    }


  }
});


export const { addPost } = postSlice.actions;