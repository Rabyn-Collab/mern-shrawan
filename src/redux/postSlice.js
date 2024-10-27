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
    },

    removePost: (state, action) => {
      state.posts.splice(action.payload, 1);
      setToLocal(state.posts);
    },
    updatePost: (state, action) => {
      state.posts = state.posts.map((post) => post.id === action.payload.id ? action.payload : post);
      setToLocal(state.posts);
    }


  }
});


export const { addPost, removePost, updatePost } = postSlice.actions;