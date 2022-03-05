import React, { useMemo, useState } from 'react'
import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import { usePosts } from './Hooks/usePosts'
import './Style/App.css'
import InputGrey from './UI/InputGrey/InputGrey'
import SelectGrey from './UI/SelectGrey/SelectGrey'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'Mexico', body: 'Country in America' },
    { id: 2, title: 'Sweden', body: 'Country in Europe' },
    { id: 3, title: 'France', body: 'Country in Europe' },
    { id: 4, title: 'Canada', body: 'Country in America' },
    { id: 5, title: 'Poland', body: 'Country in Europe' },
    { id: 6, title: 'Greece', body: 'Country in Europe' },
  ])
  let [filter, setFilter] = useState({ sort: '', search: '' })
  let searchedAndSelectedPosts = usePosts(posts, filter.sort, filter.search)

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />

      <Filter filter={filter} setFilter={setFilter} />

      {searchedAndSelectedPosts.length ? (
        <List posts={posts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarning">No posts</h2>
      )}
    </div>
  )
}

export default App
