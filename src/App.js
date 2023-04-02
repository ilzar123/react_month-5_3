import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {postFetch, postFetchV2} from 'store/slices/postSlice';
import { userActions } from 'store/slices/userSlice';
import './App.css';
import {Button, TextField} from "@mui/material";
import {deletePost} from "./store/slices/deleteSlice";
import {patchPost} from "./store/slices/patchSlice";

function App() {
  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')

  const loginUser = () => {
    const body = {
      username: value,
      password: value2
    }
    dispatch(postFetch({body}))
  }

  // const getPostsFetch = () => {
  //   dispatch(postThunk())
  // }

    const deletePosts = () => {
      dispatch(deletePost())
    }

    const patchClick = () => {
      const body = {
          id: 10,
          username: 'adminka',
          password: '345'
      }
      dispatch(patchPost({body}))
    };

  return (
    <div className="App">
        <div className='page_wrapper'>
          <TextField value={value} onChange={(e) => setValue(e.target.value)}/>
            <br/>
            <hr/>
          <TextField value={value2} onChange={(e) => setValue2(e.target.value)}/>
            <br/>
           <Button variant='outlined' onClick={loginUser}>AUTH</Button>
            <hr/>
        </div>
        <Button variant='outlined' onClick={() => dispatch(postFetchV2())}>get posts</Button>
        <br/>
        <hr/>
        <Button onClick={deletePosts} variant='contained'>Delete Post</Button>
        <br/>
        <br/>
        <hr/>
        <Button onClick={patchClick} variant='contained'>Patch Post</Button>
    </div>
  );
}

export default App;
