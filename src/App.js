import React from 'react';
import { useDispatch } from 'react-redux';
import Header from './features/header/Header';
import PostList from './features/post/PostList';
import { getCats } from './features/post/postSlice';


function App() {
  const dispatch = useDispatch()
  dispatch(getCats())

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PostList />
      </main>
    </>
  );
}

export default App;
