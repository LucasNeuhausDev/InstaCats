import React from 'react';
import { useDispatch } from 'react-redux';
import Header from './features/header/Header';
import PostList from './features/post/PostList';
import { getCats } from './features/post/postSlice';


function App() {
  const dispatch = useDispatch()
  const numberOfPosts = 10
  dispatch(getCats(numberOfPosts))

  return (
    <>
      <Header />
      <main className="">
        <PostList />
      </main>
    </>
  );
}

export default App;
